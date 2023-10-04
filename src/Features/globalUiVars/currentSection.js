import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  prevSection: 0,
  Section: 1,
};

const currentSection = createSlice({
  name: "currentSection",
  initialState,
  reducers: {
    sectionIndex: (state, action) => {
      state.prevSection = state.Section;
      state.Section = action.payload;
    },
  },
});

export default currentSection.reducer;
export const { sectionIndex } = currentSection.actions;
