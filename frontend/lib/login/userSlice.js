import { createSlice } from '@reduxjs/toolkit'


/**
 * Step 1: Import createSlice
 * Step 2: Create initial state with parameters
 * Step 3: Create a slice instance with slice name , initialState and reducers(actions)
 * Step 4: Export the actions which inside the slice instance
 * Last Step: Export the slice reducer and back to the store.js add the reducer
 */


const initialState = {
  isLoggedIn: false,
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
    }
  }
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;