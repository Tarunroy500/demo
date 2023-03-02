import { configureStore } from '@reduxjs/toolkit'
import GettingStartedReducer from './GetStartedSlice/GetStartedSlice'
export const store = configureStore({
  reducer: {
    getStarted: GettingStartedReducer
  },
})