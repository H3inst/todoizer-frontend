import axios from 'axios';
import { buildUrl, setHeaders } from '../../../utils/utils';

/**
 * Get all projects availables
 * @returns 
 */
export async function getAllProjectsService() {
  const absoluteUrl = buildUrl('/dashboard/projects');
  const headers = setHeaders();
  const axiosParams = {
    headers
  };

  const { data: serviceData } = await axios.get(absoluteUrl, axiosParams);
  return serviceData;
}

/**
 * Get a project by ID
 * @param {String} project_id 
 * @returns 
 */
export async function getProjectByIdService(project_id) {
  const absoluteUrl = buildUrl(`/dashboard/projects/${project_id}`);
  const headers = setHeaders();
  const axiosParams = {
    headers
  };

  const { data: serviceData } = await axios.get(absoluteUrl, axiosParams);
  return serviceData;
}

/**
 * Creates a project
 * @param {Object} payload 
 * @returns 
 */
export async function createProjectService(payload) {
  const absoluteUrl = buildUrl('/dashboard/projects');
  const headers = setHeaders();
  const axiosParams = {
    headers
  };

  const { data: serviceData } = await axios.post(absoluteUrl, payload, axiosParams);
  return serviceData;
}

/**
 * Edit a project
 * @param {String} projectId 
 * @param {Object} payload 
 * @returns 
 */
export async function editProjectService(projectId, payload) {
  const absoluteUrl = buildUrl(`/dashboard/projects/${projectId}`);
  const headers = setHeaders();
  const axiosParams = {
    headers
  };

  const { data: serviceData } = await axios.put(absoluteUrl, payload, axiosParams);
  return serviceData;
}

/**
 * Deletes a project
 * @param {String} projectId 
 * @returns 
 */
export async function deleteProjectService(projectId) {
  const absoluteUrl = buildUrl(`/dashboard/projects/${projectId}`);
  const headers = setHeaders();
  const axiosParams = {
    headers
  };

  const { data: serviceData } = await axios.delete(absoluteUrl, axiosParams);
  return serviceData;
}