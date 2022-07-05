import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal";

export interface GameConditionals {
  isLoading: boolean;
  isAppRunning: boolean;
  isImageClicked: boolean;
  isCopy: boolean;
}

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
  wrongMatches: number;
}

export interface SingleGameState {
  gameData: MemeState[];
  matchedImages: string[];
  selectedImages: string[];
  error: string;
  gameStats: GameStatsState;
  gameConditionals: GameConditionals;
}

export interface Game {
  singleGame: SingleGameState;
  gameCopies: SingleGameState[];
}

export interface GameMainState {
  game: Game;
}

const gameConditionals: GameConditionals = {
  isLoading: false,
  isAppRunning: false,
  isImageClicked: false,
  isCopy: false,
};

const gameStatsState: GameStatsState = {
  stepCount: 0,
  gameTimes: [],
  wrongMatches: 0,
};

const singleGameState: SingleGameState = {
  gameData: [],
  matchedImages: [],
  selectedImages: [],
  error: "",
  gameStats: gameStatsState,
  gameConditionals: gameConditionals,
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
    updateImagesState: (state, action) => {
      updateImagesData(state, action);
      updateWrongMatches(state);
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

    appRunning: (state, action) => {
      state.singleGame.gameConditionals.isAppRunning = action.payload;
    },

    imageClicked: (state, action) => {
      state.singleGame.gameConditionals.isImageClicked = action.payload;
    },

    updateGameTimes: (state, action) => {
      updateTimes(state, action);
    },

    unmountGameComponent: (state) => {
      clearGameState(state, () => (state.singleGame.gameData = []));
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getImagesAndResetState.pending, (state) => {
      state.singleGame.gameConditionals.isLoading = true;
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
      clearGameState(state, null);
    });

    builder.addCase(getImagesAndResetState.rejected, (state) => {
      state.singleGame.error = "Unable to fetch images";
      state.singleGame.gameConditionals.isLoading = false;
    });
  },
});

export const {
  updateImagesState,
  clearSelectedImages,
  copyFinishedGame,
  updateCurrentStatistics,
  appRunning,
  imageClicked,
  updateGameTimes,
  unmountGameComponent,
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

const updateTimes = (
  state: WritableDraft<Game>,
  action: { payload: any; type?: string }
) => {
  if (state.singleGame.selectedImages.length < 2) {
    state.singleGame.gameStats.gameTimes = [
      ...state.singleGame.gameStats.gameTimes,
      {
        start: action.payload,
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
        end: action.payload,
      },
    ];
  }
};

const clearGameState = (
  state: WritableDraft<Game>,
  clearGameData: { (): never[]; (): void } | null
) => {
  if (clearGameData) clearGameData();
  state.singleGame.selectedImages = [];
  state.singleGame.matchedImages = [];
  state.singleGame.error = "";
  state.singleGame.gameStats = {
    stepCount: 0,
    gameTimes: [],
    wrongMatches: 0,
  };
  state.singleGame.gameConditionals = {
    isLoading: false,
    isCopy: false,
    isAppRunning: false,
    isImageClicked: false,
  };
};
