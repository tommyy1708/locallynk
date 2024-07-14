import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    is_loggin: false,
    user: '',
    uid: '',
  },
  reducers: {
    login: (state, action) => {
      state.is_loggin = true;
      state.user = action.payload.first_name;
      state.uid = action.payload.uid;
    },
    logout: (state) => {
      is_loggin = false;
      user = '';
      uid = '';
    },
  },
})


export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
