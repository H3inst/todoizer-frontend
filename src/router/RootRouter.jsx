import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import routes from '../constants/routes';
import { verifyAuthAction } from '../features/user/userActions';

import Access from '../components/access/Access';
import Login from '../components/access/login/Login';
import Dashboard from '../components/dashboard/Dashboard';
import EmptyState from '../components/dashboard/emptyState/EmptyStateDashboard';
import Project from '../components/dashboard/project/Project';
import Team from '../components/dashboard/team/Team';
import TeamMembers from '../components/dashboard/team/members/TeamMembers';


function RootRouter() {
  const isAuth = useSelector(state => state.user.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(verifyAuthAction());
  }, [dispatch]);

  const render = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path={routes.root} element={
            !isAuth
              ? <Navigate to={routes.access} />
              : <Navigate to={routes.dashboard} />
          } />
          {/* Access */}
          <Route path={routes.access} element={
            !isAuth
              ? <Access />
              : <Navigate to={routes.dashboard} />
          }>
            <Route index element={<Login />} />
            <Route path={routes.accessLogin} element={<Login />} />
          </Route>
          {/* Dashboard */}
          <Route path={routes.dashboard} element={
            isAuth
              ? <Dashboard />
              : <Navigate to={routes.access} />
          }>
            <Route index element={<EmptyState />} />
            <Route path={routes.dashboardProject} element={<Project />} />
            <Route path={routes.dashboardTeam} element={<Team />} />
            <Route path={routes.dashboardTeamMembers} element={<TeamMembers />} />
            <Route path={routes.dashboardSettings} element={<h1>Settgins</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  };

  return render();
}

export default RootRouter;