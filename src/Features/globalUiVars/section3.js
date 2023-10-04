import { createSlice } from "@reduxjs/toolkit";
import { sectionIndex } from "./currentSection";

const initialState = {
  rotation: 0,
};

const section3 = createSlice({
  name: "section3",
  initialState,
  reducers: {
    rotate: (state, action) => {
      state.rotation += action.payload;
    },
  },
  extraReducers: {
    [sectionIndex]: (state, action) => {
      if (action.payload === 3) state.rotation = 0;
    },
  },
});

export default section3.reducer;
export const rota = section3;
export const { rotate } = section3.actions;
