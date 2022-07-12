import * as interfaceActions from '../interface/interfaceActions';
import * as todoServices from '../../services/dashboard/project/projectTodo';
import { RESPONSE_STATUS } from '../../constants/constants';
import { toast } from 'react-toastify';
import { getProjectTodos } from './projectSlice';
import { getAllProjectsAction } from './projectActions';

export function getAllTodosAction(projectId) {
  return async function (dispatch) {
    try {
      dispatch(interfaceActions.startLoadingAction());

      const response = await todoServices.getAllTodosService(projectId);
      if (response.status !== RESPONSE_STATUS.success) {
        toast.error(response.error);
        return false;
      }
      dispatch(getProjectTodos(response.data.todos));

    } catch (error) {
      console.error(error);

    } finally {
      dispatch(interfaceActions.finishLoadingAction());
    }
  };
}

export function createTodoAction(projectId, payload) {
  return async function (dispatch) {
    try {
      dispatch(interfaceActions.startLoadingAction());

      const response = await todoServices.createTodoService(projectId, payload);
      if (response.status !== RESPONSE_STATUS.success) {
        toast.error(response.error);
        return false;
      }
      dispatch(getAllTodosAction(projectId));
      dispatch(getAllProjectsAction());
      return true;

    } catch (error) {
      console.error(error);

    } finally {
      dispatch(interfaceActions.finishLoadingAction());
    }
  };
}

export function editTodoAction(projectId, todo_id, payload) {
  return async function (dispatch) {
    try {
      dispatch(interfaceActions.startLoadingAction());

      const response = await todoServices.editTodoService(projectId, todo_id, payload);
      if (response.status !== RESPONSE_STATUS.success) {
        toast.error(response.error);
        return false;
      }
      dispatch(getAllTodosAction(projectId));

    } catch (error) {
      console.error(error);

    } finally {
      dispatch(interfaceActions.finishLoadingAction());

    }
  };
}

export function deleteTodoAction(projectId, todoId) {
  return async function (dispatch) {
    try {
      dispatch(interfaceActions.startLoadingAction());

      const response = await todoServices.deleteTodoService(projectId, todoId);
      if (response.status !== RESPONSE_STATUS.success) {
        toast.error(response.error);
        return false;
      }
      dispatch(getAllTodosAction(projectId));
      dispatch(getAllProjectsAction());
      return true;

    } catch (error) {
      console.error(error);

    } finally {
      dispatch(interfaceActions.finishLoadingAction());
    }
  };
}