import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false
};

export const interfaceSlice = createSlice({
  name: 'interface',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    finishLoading: (state) => {
      state.isLoading = false;
    }
  }
});

export const { startLoading, finishLoading } = interfaceSlice.actions;
const interfaceReducer = interfaceSlice.reducer;

export default interfaceReducer;