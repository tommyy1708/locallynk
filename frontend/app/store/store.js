import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  is_login: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action) {
      state.is_login = true;
    },
    logout(state, action) {
      state.is_login = false;
    },
  },
});

export const { login, logout } = userSlice.actions;

const userStore = configureStore({
  reducer: userSlice.reducer,
});

export default userStore;
