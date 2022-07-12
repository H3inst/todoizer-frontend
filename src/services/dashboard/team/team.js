import axios from 'axios';
import { buildUrl, setHeaders } from '../../../utils/utils';

/**
 * Get all user teams
 * @returns 
 */
export async function getAllTeamsService() {
  const absoluteUrl = buildUrl('/dashboard/teams');
  const headers = setHeaders();
  const axiosParams = {
    headers
  };

  const { data: serviceData } = await axios.get(absoluteUrl, axiosParams);
  return serviceData;
}

/**
 * Get team by id
 * @param {String} team_id 
 * @returns 
 */
export async function getTeamByIdService(team_id) {
  const absoluteUrl = buildUrl(`/dashboard/teams/${team_id}`);
  const headers = setHeaders();
  const axiosParams = {
    headers
  };

  const { data: serviceData } = await axios.get(absoluteUrl, axiosParams);
  return serviceData;
}

/**
 * Create a team
 * @param {Object} payload 
 * @returns 
 */
export async function createTeamService(payload) {
  const absoluteUrl = buildUrl('/dashboard/teams');
  const headers = setHeaders();
  const axiosParams = {
    headers
  };

  const { data: serviceData } = await axios.post(absoluteUrl, payload, axiosParams);
  return serviceData;
}