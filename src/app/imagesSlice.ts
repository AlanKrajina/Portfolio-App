import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal";

const userStatsState: UserStatsState = {
  stepCount: 0,
  gameTimes: [],
  timer: "",
  wrongMatches: 0,
};

const initialState: ImagesState = {
  imagesData: [],
  isLoading: false,
  matchedImages: [],
  selectedImages: [],
  error: "",
  gameStats: userStatsState,
};

interface Meme {
  id: string;
  name: string;
  url: string;
  urlBack: string;
  selected: boolean;
}

export interface GameTime {
  start: string;
  end: string;
}

export interface ImagesMainState {
  gameState: ImagesState;
}

export interface UserStatsState {
  stepCount: number;
  gameTimes: GameTime[];
  timer: string;
  wrongMatches: number;
}

export interface ImagesState {
  imagesData: Meme[];
  isLoading: boolean;
  matchedImages: string[];
  selectedImages: string[];
  error: string;
  gameStats: UserStatsState;
}

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
      state.gameStats.timer = action.payload;
    },

    clearSelectedImages: (state) => {
      state.gameStats.stepCount += 1;
      state.imagesData = state.imagesData.map((meme) =>
        !state.matchedImages.includes(meme.name)
          ? {
              ...meme,
              selected: false,
            }
          : meme
      );

      state.selectedImages = [];
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getImagesAndResetState.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getImagesAndResetState.fulfilled, (state, action) => {
      const randomMemes = action.payload.data.memes
        .filter((meme: Meme) => meme.name !== "Blank Transparent Square")
        .sort(() => 0.5 - Math.random())
        .slice(0, 9);

      const createCopies = (indexNumber: number) => {
        return randomMemes.map((meme: Meme, index: number) => {
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

      state.imagesData = [...memesCopy1, ...memesCopy2].sort(
        () => 0.5 - Math.random()
      );
      state.isLoading = false;
      state.selectedImages = [];
      state.matchedImages = [];
      state.gameStats = {
        stepCount: 0,
        gameTimes: [],
        timer: "",
        wrongMatches: 0,
      };
    });

    builder.addCase(getImagesAndResetState.rejected, (state) => {
      state.error = "Unable to fetch images";
      state.isLoading = false;
    });
  },
});

export const { imageIsClicked, clearSelectedImages, updateTimer } =
  imagesSlice.actions;
export default imagesSlice.reducer;

const updateImagesData = (
  state: WritableDraft<ImagesState>,
  action: { payload: Meme; type?: string }
) => {
  if (state.selectedImages.length < 2 && !action.payload.selected) {
    state.selectedImages = [...state.selectedImages, action.payload.name];

    state.imagesData = state.imagesData.map((meme: Meme) =>
      meme.id === action.payload.id ? { ...meme, selected: true } : meme
    );
  }
  if (
    state.selectedImages.length === 2 &&
    state.selectedImages[0] === state.selectedImages[1]
  ) {
    state.matchedImages = [...state.matchedImages, state.selectedImages[0]];
  }
};

const updateWrongMatches = (state: WritableDraft<ImagesState>) => {
  if (
    state.selectedImages.length === 2 &&
    state.selectedImages[0] !== state.selectedImages[1]
  ) {
    state.gameStats.wrongMatches += 1;
  }
};

const updateGameTimes = (state: WritableDraft<ImagesState>) => {
  if (state.selectedImages.length < 2) {
    state.gameStats.gameTimes = [
      ...state.gameStats.gameTimes,
      {
        start: state.gameStats.timer,
        end: "",
      },
    ];
  } else {
    const oldState =
      state.gameStats.gameTimes[state.gameStats.gameTimes.length - 1];

    state.gameStats.gameTimes = [
      ...state.gameStats.gameTimes.filter((el) => el.end !== ""),
      {
        start: oldState.start,
        end: state.gameStats.timer,
      },
    ];
  }
};
