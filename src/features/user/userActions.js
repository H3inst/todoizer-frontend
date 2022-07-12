import { toast } from 'react-toastify';

import { RESPONSE_STATUS } from '../../constants/constants';
import * as accessServices from '../../services/access';
import * as interfaceActions from '../interface/interfaceActions';

import { cleanProject } from '../project/projectSlice';
import { login, logout } from './userSlice';

export function registerUserAction(user) {
  return async function (dispatch) {
    try {
      dispatch(interfaceActions.startLoadingAction());

      if (user.user_password !== user.confirm_password) {
        toast.error('Password do not match.');
        return false;
      }
      delete user.confirm_password;

      const response = await accessServices.registerUserService(user);
      if (response.status !== RESPONSE_STATUS.success) {
        toast.error(response.error);
        return false;
      }
      toast.success('Account create successfully, please login.');
      return true;

    } catch (error) {
      console.error(error);

    } finally {
      dispatch(interfaceActions.finishLoadingAction());
    }
  };
}

export function loginUserAction(user) {
  return async function (dispatch) {
    try {
      dispatch(interfaceActions.startLoadingAction());
      const response = await accessServices.loginUserService(user);

      if (response.status !== RESPONSE_STATUS.success) {
        toast.error(response.error);
        return false;
      }
      localStorage.setItem('x_token', response.data.token);
      dispatch(login(response.data.user));

    } catch (error) {
      console.error(error);

    } finally {
      dispatch(interfaceActions.finishLoadingAction());
    }
  };
}

export function logoutUserAction() {
  return function (dispatch) {
    try {
      dispatch(interfaceActions.startLoadingAction());
      localStorage.clear();
      dispatch(cleanProject());
      dispatch(logout());

    } finally {
      dispatch(interfaceActions.finishLoadingAction());
    }
  };
}

export function verifyAuthAction() {
  return async function (dispatch) {
    try {
      dispatch(interfaceActions.startLoadingAction());
      const response = await accessServices.checkTokenService();

      if (response.status !== RESPONSE_STATUS.success) {
        localStorage.removeItem('x_token');
        return false;
      }
      dispatch(login(response.data));

    } catch (error) {
      console.error(error);

    } finally {
      dispatch(interfaceActions.finishLoadingAction());
    }
  };
}