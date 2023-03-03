import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  blogs: null,
  isLoggedIn: false,
  error: null,
  loading: true,
  singleuser: null,
};

export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setloading: (state, action) => {
      state.loading = true;
    },
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
      state.loading = false;
    },
    loadblogs: (state, action) => {
      state.blogs = action.payload;
      state.loading = false;
    },
    loadsingleuser: (state, action) => {
      state.singleuser = action.payload;
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  loaduser,
  errors,
  signout,
  loadblogs,
  loadsingleuser,
  setloading,
} = userSlice.actions;

export default userSlice.reducer;
