import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
};

const theme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleMode: (state, action) => {
      state.mode === "dark" ? (state.mode = "light") : (state.mode = "dark");
    },
  },
});

export default theme.reducer;
export const { toggleMode } = theme.actions;
