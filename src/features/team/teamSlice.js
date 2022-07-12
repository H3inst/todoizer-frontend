import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  teams: [],
  team: {}
};

export const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    getAllTeams: (state, action) => {
      state.teams = action.payload;
    },
    getTeam: (state, action) => {
      state.team = action.payload;
    },
    cleanTeam: (state) => {
      state.team = initialState.team;
    }
  }
});

export const { getAllTeams, getTeam, cleanTeam } = teamSlice.actions;
const teamReducer = teamSlice.reducer;

export default teamReducer;