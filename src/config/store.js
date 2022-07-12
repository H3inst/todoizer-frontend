import { configureStore } from '@reduxjs/toolkit';

import interfaceReducer from '../features/interface/interfaceSlice';
import projectReducer from '../features/project/projectSlice';
import teamReducer from '../features/team/teamSlice';
import userReducer from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    interface: interfaceReducer,
    project: projectReducer,
    team: teamReducer
  }
});