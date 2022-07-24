import axios from 'axios';
import { API } from '../../../constants/constants';
import { buildUrl, setHeaders } from '../../../utils/utils';

/**
 * Get all todos of a project.
 * @param {String} projectId 
 * @returns 
 */
export async function getAllTodosService(projectId) {
  const absoluteUrl = buildUrl(`/${API.dashboard}/${API.project}/${projectId}/${API.todo}`);
  const headers = setHeaders();
  const axiosParams = {
    headers
  };

  const { data: serviceData } = await axios.get(absoluteUrl, axiosParams);
  return serviceData;
}

/**
 * Create a todo in a project.
 * @param {String} projectId 
 * @param {Object} payload 
 * @returns 
 */
export async function createTodoService(projectId, payload) {
  const absoluteUrl = buildUrl(`/${API.dashboard}/${API.project}/${projectId}/${API.todo}`);
  const headers = setHeaders();
  const axiosParams = {
    headers
  };

  const { data: serviceData } = await axios.post(absoluteUrl, payload, axiosParams);
  return serviceData;
}

/**
 * Edit a todo in a project.
 * @param {String} projectId 
 * @param {String} todo_id 
 * @param {Object} payload 
 * @returns 
 */
export async function editTodoService(projectId, todo_id, payload) {
  const absoluteUrl = buildUrl(`/${API.dashboard}/${API.project}/${projectId}/${API.todo}/${todo_id}`);
  const headers = setHeaders();
  const axiosParams = {
    headers
  };

  const { data: serviceData } = await axios.put(absoluteUrl, payload, axiosParams);
  return serviceData;
}

/**
 * Delete a todo of a project.
 * @param {String} projectId 
 * @param {String} todoId 
 * @returns 
 */
export async function deleteTodoService(projectId, todoId) {
  const absoluteUrl = buildUrl(`/${API.dashboard}/${API.project}/${projectId}/${API.todo}/${todoId}`);
  const headers = setHeaders();
  const axiosParams = {
    headers
  };

  const { data: serviceData } = await axios.delete(absoluteUrl, axiosParams);
  return serviceData;
}