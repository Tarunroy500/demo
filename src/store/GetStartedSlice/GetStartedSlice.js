import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
  isLoggedIn: true,
};

export const GettingStartedSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    handleGettingStarted: (state, action) => {
      state.value = !state.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleGettingStarted } = GettingStartedSlice.actions;

export default GettingStartedSlice.reducer;
