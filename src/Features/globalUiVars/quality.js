import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quality: "high",
};

const changeQuality = createSlice({
  name: "quality",
  initialState,
  reducers: {
    toggleQuality: (state) => {
      state.quality = state.quality === "high" ? "low" : "high";
    },
  },
});

export default changeQuality.reducer;
export const { toggleQuality } = changeQuality.actions;
