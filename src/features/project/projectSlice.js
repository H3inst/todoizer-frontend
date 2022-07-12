import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  projects: [],
  project: { todos: [] }
};

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    getAllProjects: (state, action) => {
      state.projects = action.payload;
    },
    getProject: (state, action) => {
      state.project = { ...state.project, ...action.payload };
    },
    getProjectTodos: (state, action) => {
      state.project.todos = action.payload;
    },
    cleanProject: (state) => {
      state.project = initialState.project
    }
  }
});

export const {
  getAllProjects,
  getProject,
  getProjectTodos,
  cleanProject
} = projectSlice.actions;
const projectReducer = projectSlice.reducer;

export default projectReducer;