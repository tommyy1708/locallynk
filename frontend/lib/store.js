import { configureStore } from '@reduxjs/toolkit';
import userReducer from './login/userSlice';

export const store = configureStore({
  reducer: {
    user:userReducer,
  },
})


