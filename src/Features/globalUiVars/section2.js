import { createSlice } from "@reduxjs/toolkit";
import { sectionIndex } from "./currentSection";
import { toggleMode } from "./theme";

let backgrounds = [
  ["hsl(204deg 100% 31%)", "hsl(206deg 60% 50%)"],
  ["hsl(354deg 79% 31%)", "hsl(4deg 64% 47%)"],
  ["hsl(164deg 100% 25%)", "hsl(119deg 59% 58%)"],
];
let dayPalette = [
  ["hsl(204deg 100% 36%)", "hsl(206deg 60% 55%)"],
  ["hsl(354deg 79% 36%)", "hsl(4deg 64% 52%)"],
  ["hsl(164deg 100% 30%)", "hsl(119deg 59% 63%)"],
];
let nightPalette = [
  ["hsl(204deg 100% 31%)", "hsl(206deg 60% 50%)"],
  ["hsl(354deg 79% 31%)", "hsl(4deg 64% 47%)"],
  ["hsl(164deg 100% 25%)", "hsl(119deg 59% 58%)"],
];

const initialState = {
  part: 0,
  backgroundPalette: backgrounds[0],
  selectedResume: {
    active: false,
    index: undefined,
    bodyWidth: undefined,
    resumeWidth: undefined,
    resumeLeftPosition: undefined,
    centerFormula: "(bodyWidth - resumeWidth) / 2 - resumeLeftPosition",
    center: undefined,
    close: undefined,
  },
};

const section2 = createSlice({
  name: "section2",
  initialState,
  reducers: {
    currentPart: (state, action) => {
      if (state.part === -1) state.part = 0;
      if (state.part === 3) state.part = 2;
      state.selectedResume = {
        ...state.selectedResume,
        active: false,
        center: undefined,
        close: "forced",
      };
      state.part += action.payload;
      state.backgroundPalette = backgrounds[state.part] || "none";
    },
    selectResume: (state, action) => {
      state.selectedResume = { ...state.selectedResume, ...action.payload };
      if (state.selectedResume.active)
        state.selectedResume.center =
          (state.selectedResume.bodyWidth - state.selectedResume.resumeWidth) /
            2 -
          state.selectedResume.resumeLeftPosition;
    },
  },
  extraReducers: {
    [sectionIndex]: (state, action) => {
      if (action.payload >= 3) {
        state.part = 2;
        state.backgroundPalette = backgrounds[2];
      }
      if (action.payload === 1) {
        state.part = 0;
        state.backgroundPalette = backgrounds[0];
      }
      state.selectedResume = {
        ...state.selectedResume,
        active: false,
        center: undefined,
      };
    },
    [toggleMode]: (state, action) => {
      if (action.payload === "light") {
        backgrounds = dayPalette;
        state.backgroundPalette = backgrounds[state.part];
      }
      if (action.payload === "dark") {
        backgrounds = nightPalette;
        state.backgroundPalette = backgrounds[state.part];
      }
    },
  },
});

export default section2.reducer;
export const { currentPart, bgPalette, selectResume } = section2.actions;
