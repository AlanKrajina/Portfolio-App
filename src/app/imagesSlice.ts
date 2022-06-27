import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface Meme {
  id: string;
  name: string;
  url: string;
  urlBack: string;
  selected: boolean;
}

export interface ImagesMainState {
  gameState: ImagesState;
}

export interface UserStatsState {
  stepCount: number;
  timer: string;
  wrongMatches: number;
  openCardTimer: string;
}

const userStatsState: UserStatsState = {
  stepCount: 0,
  timer: "",
  wrongMatches: 0,
  openCardTimer: "",
};

export interface ImagesState {
  imagesData: Meme[];
  isLoading: boolean;
  matchedImages: string[];
  selectedImages: string[];
  error: string;
  gameStats: UserStatsState;
}

const initialState: ImagesState = {
  imagesData: [],
  isLoading: false,
  matchedImages: [],
  selectedImages: [],
  error: "",
  gameStats: userStatsState,
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
      if (state.selectedImages.length < 2 && !action.payload.selected) {
        state.selectedImages = [...state.selectedImages, action.payload.name];

        state.imagesData = state.imagesData.map((meme) =>
          meme.id === action.payload.id ? { ...meme, selected: true } : meme
        );
      }
      if (
        state.selectedImages.length === 2 &&
        state.selectedImages[0] === state.selectedImages[1]
      ) {
        state.matchedImages = [...state.matchedImages, state.selectedImages[0]];
      }

      // update user stats
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
        .slice(0, 12);

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
      const memesCopy2 = createCopies(13);

      state.imagesData = [...memesCopy1, ...memesCopy2].sort(
        () => 0.5 - Math.random()
      );
      state.isLoading = false;
      state.gameStats.stepCount = 0;
      state.selectedImages = [];
      state.matchedImages = [];
    });

    builder.addCase(getImagesAndResetState.rejected, (state) => {
      state.error = "Unable to fetch images";
      state.isLoading = false;
    });
  },
});

export const { imageIsClicked, clearSelectedImages } = imagesSlice.actions;
export default imagesSlice.reducer;
