import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
  user: null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuth = false;
    }
  },
});

export const { login, logout } = userSlice.actions;
const userReducer = userSlice.reducer;

export default userReducer;