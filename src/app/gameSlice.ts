import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal";

export interface GameTimeState {
  start: string;
  end: string;
}

export interface MemeState {
  id: string;
  name: string;
  url: string;
  urlBack: string;
  selected: boolean;
}

export interface GameStatsState {
  stepCount: number;
  gameTimes: GameTimeState[];
  timer: string;
  wrongMatches: number;
}

export interface SingleGameState {
  gameData: MemeState[];
  isLoading: boolean;
  isCopy: boolean;
  matchedImages: string[];
  selectedImages: string[];
  error: string;
  gameStats: GameStatsState;
}

export interface Game {
  singleGame: SingleGameState;
  gameCopies: SingleGameState[];
}

export interface GameMainState {
  game: Game;
}

const gameStatsState: GameStatsState = {
  stepCount: 0,
  gameTimes: [],
  timer: "",
  wrongMatches: 0,
};

const singleGameState: SingleGameState = {
  gameData: [],
  isLoading: false,
  isCopy: false,
  matchedImages: [],
  selectedImages: [],
  error: "",
  gameStats: gameStatsState,
};

const initialState: Game = {
  singleGame: singleGameState,
  gameCopies: [],
};

export const getImagesAndResetState = createAsyncThunk(
  "images/fetchImages",
  async () => {
    const response = await fetch("https://api.imgflip.com/get_memes");
    const formattedResponse = await response.json();
    return formattedResponse;
  }
);

export const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    imageIsClicked: (state, action) => {
      updateImagesData(state, action);
      updateWrongMatches(state);
      updateGameTimes(state);
    },

    updateTimer: (state, action) => {
      state.singleGame.gameStats.timer = action.payload;
    },

    clearSelectedImages: (state) => {
      state.singleGame.gameStats.stepCount += 1;
      state.singleGame.gameData = state.singleGame.gameData.map((meme) =>
        !state.singleGame.matchedImages.includes(meme.name)
          ? {
              ...meme,
              selected: false,
            }
          : meme
      );

      state.singleGame.selectedImages = [];
    },
    copyFinishedGame: (state, action) => {
      state.gameCopies = [...state.gameCopies, action.payload];
    },
    updateCurrentStatistics: (state, action) => {
      state.singleGame = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getImagesAndResetState.pending, (state) => {
      state.singleGame.isLoading = true;
    });

    builder.addCase(getImagesAndResetState.fulfilled, (state, action) => {
      const randomMemes = action.payload.data.memes
        .filter((meme: MemeState) => meme.name !== "Blank Transparent Square")
        .sort(() => 0.5 - Math.random())
        .slice(0, 9);

      const createCopies = (indexNumber: number) => {
        return randomMemes.map((meme: MemeState, index: number) => {
          return {
            id: index + indexNumber,
            name: meme.name,
            url: meme.url,
            urlBack: "https://reactjs.org/logo-og.png",
            selected: false,
          };
        });
      };

      const memesCopy1 = createCopies(1);
      const memesCopy2 = createCopies(10);

      state.singleGame.gameData = [...memesCopy1, ...memesCopy2].sort(
        () => 0.5 - Math.random()
      );
      state.singleGame.isLoading = false;
      state.singleGame.isCopy = false;
      state.singleGame.selectedImages = [];
      state.singleGame.matchedImages = [];
      state.singleGame.gameStats = {
        stepCount: 0,
        gameTimes: [],
        timer: "",
        wrongMatches: 0,
      };
    });

    builder.addCase(getImagesAndResetState.rejected, (state) => {
      state.singleGame.error = "Unable to fetch images";
      state.singleGame.isLoading = false;
    });
  },
});

export const {
  imageIsClicked,
  clearSelectedImages,
  updateTimer,
  copyFinishedGame,
  updateCurrentStatistics,
} = imagesSlice.actions;
export default imagesSlice.reducer;

const updateImagesData = (
  state: WritableDraft<Game>,
  action: { payload: MemeState; type?: string }
) => {
  if (state.singleGame.selectedImages.length < 2 && !action.payload.selected) {
    state.singleGame.selectedImages = [
      ...state.singleGame.selectedImages,
      action.payload.name,
    ];

    state.singleGame.gameData = state.singleGame.gameData.map(
      (meme: MemeState) =>
        meme.id === action.payload.id ? { ...meme, selected: true } : meme
    );
  }
  if (
    state.singleGame.selectedImages.length === 2 &&
    state.singleGame.selectedImages[0] === state.singleGame.selectedImages[1]
  ) {
    state.singleGame.matchedImages = [
      ...state.singleGame.matchedImages,
      state.singleGame.selectedImages[0],
    ];
  }
};

const updateWrongMatches = (state: WritableDraft<Game>) => {
  if (
    state.singleGame.selectedImages.length === 2 &&
    state.singleGame.selectedImages[0] !== state.singleGame.selectedImages[1]
  ) {
    state.singleGame.gameStats.wrongMatches += 1;
  }
};

const updateGameTimes = (state: WritableDraft<Game>) => {
  if (state.singleGame.selectedImages.length < 2) {
    state.singleGame.gameStats.gameTimes = [
      ...state.singleGame.gameStats.gameTimes,
      {
        start: state.singleGame.gameStats.timer,
        end: "",
      },
    ];
  } else {
    const oldState =
      state.singleGame.gameStats.gameTimes[
        state.singleGame.gameStats.gameTimes.length - 1
      ];

    state.singleGame.gameStats.gameTimes = [
      ...state.singleGame.gameStats.gameTimes.filter((el) => el.end !== ""),
      {
        start: oldState.start,
        end: state.singleGame.gameStats.timer,
      },
    ];
  }
};
