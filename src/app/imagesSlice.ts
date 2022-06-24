import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface Meme {
  id: string;
  name: string;
  url: string;
  urlBack: string;
  selected: boolean;
}

export interface ImagesMainState {
  images: ImagesState;
}

export interface ImagesState {
  imagesData: Meme[];
  isLoading: boolean;
  count: number;
  matchedImages: string[];
  selectedImages: string[];
  error: string;
}

const initialState: ImagesState = {
  imagesData: [],
  isLoading: false,
  count: 0,
  matchedImages: [],
  selectedImages: [],
  error: "",
};

export const getImages = createAsyncThunk("images/fetchImages", async () => {
  const response = await fetch("https://api.imgflip.com/get_memes");
  const formattedResponse = await response.json();
  return formattedResponse;
});

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
    },

    clearSelectedImages: (state) => {
      state.count += 1;
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

    resetReduxStates: (state) => {
      state.count = 0;
      state.selectedImages = [];
      state.matchedImages = [];
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getImages.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getImages.fulfilled, (state, action) => {
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
    });

    builder.addCase(getImages.rejected, (state) => {
      state.error = "Unable to fetch images";
      state.isLoading = false;
    });
  },
});

export const { imageIsClicked, clearSelectedImages, resetReduxStates } =
  imagesSlice.actions;
export default imagesSlice.reducer;
