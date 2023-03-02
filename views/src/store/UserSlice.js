import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  blogs: null,
  isLoggedIn: false,
  error: null,
  loading: true,
};

export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    loaduser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.loading = false;
      state.error = null;
    },
    errors: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    signout: (state, action) => {
      state.user = null;
      state.isLoggedIn = false;
      state.error = null;
    },
    loadblogs: (state, action) => {
      state.blogs = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loaduser, errors, signout, loadblogs } = userSlice.actions;

export default userSlice.reducer;
