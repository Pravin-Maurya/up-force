import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeStep: 0,
};

const stepSlice = createSlice({
  name: "modifySteps",
  initialState,
  reducers: {
    addSteps: (state, action) => {
      state.activeStep = state.activeStep + 1;
    },
    reduceStep: (state, action) => {
      state.activeStep = state.activeStep - 1;
    },
  },
});
export const { addSteps, reduceStep } = stepSlice.actions;

const { reducer } = stepSlice;
export default reducer;
