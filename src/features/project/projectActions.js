import { toast } from 'react-toastify';
import { RESPONSE_STATUS } from '../../constants/constants';
import * as projectServices from '../../services/dashboard/project/project';
import * as interfaceActions from '../interface/interfaceActions';
import { cleanTeam } from '../team/teamSlice';
import { getAllProjects, getProject } from './projectSlice';
import { getAllTodosAction } from './projectTodoActions';

export function getAllProjectsAction() {
  return async function (dispatch) {
    try {
      dispatch(interfaceActions.startLoadingAction());

      const response = await projectServices.getAllProjectsService();
      if (response.status !== RESPONSE_STATUS.success) {
        toast.error(response.error);
        return false;
      }
      dispatch(getAllProjects(response.data.projects));
      return true;

    } catch (error) {
      console.error(error);

    } finally {
      dispatch(interfaceActions.finishLoadingAction());
    }
  };
}

export function getProjectByIdAction(projectId) {
  return async function (dispatch) {
    try {
      dispatch(interfaceActions.startLoadingAction());

      const response = await projectServices.getProjectByIdService(projectId);
      if (response.status !== RESPONSE_STATUS.success) {
        toast.error(response.error);
        return false;
      }
      dispatch(cleanTeam());
      dispatch(getProject(response.data));
      dispatch(getAllTodosAction(projectId));

    } catch (error) {
      console.error(error);

    } finally {
      dispatch(interfaceActions.finishLoadingAction());
    }
  };
}

export function createProjectAction(project) {
  return async function (dispatch) {
    try {
      dispatch(interfaceActions.startLoadingAction());

      const response = await projectServices.createProjectService(project);
      if (response.status !== RESPONSE_STATUS.success) {
        toast.error(response.error);
        return false;
      }
      dispatch(getAllProjectsAction());
      return response.data;

    } catch (error) {
      console.error(error);

    } finally {
      dispatch(interfaceActions.finishLoadingAction());
    }
  };
}

export function editProjectAction(projectId, payload) {
  return async function (dispatch) {
    try {
      dispatch(interfaceActions.startLoadingAction());

      const response = await projectServices.editProjectService(projectId, payload);
      if (response.status !== RESPONSE_STATUS.success) {
        toast.error(response.error);
        return false;
      }
      dispatch(getProjectByIdAction(projectId));
      dispatch(getAllProjectsAction());
      return true;

    } catch (error) {
      console.error(error);

    } finally {
      dispatch(interfaceActions.finishLoadingAction());
    }
  };
}

export function deleteProjectAction(projectId) {
  return async function (dispatch) {
    try {
      dispatch(interfaceActions.startLoadingAction());

      const response = await projectServices.deleteProjectService(projectId);
      if (response.status !== RESPONSE_STATUS.success) {
        toast.error(response.error);
        return false;
      }
      dispatch(getAllProjectsAction());
      return true;

    } catch (error) {
      console.error(error);

    } finally {
      dispatch(interfaceActions.finishLoadingAction());
    }
  };
}