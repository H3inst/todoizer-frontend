import axios from 'axios';
import { buildUrl, setHeaders } from '../utils/utils';

/**
 * Service for register an user.
 * @param {Object} payload 
 * @returns 
 */
export async function registerUserService(user) {
  const absoluteUrl = buildUrl('/access/register');
  const { data: serviceData } = await axios.post(absoluteUrl, user);

  return serviceData;
}

/**
 * Service for login an user.
 * @param {Object} payload 
 * @returns 
 */
export async function loginUserService(user) {
  const absoluteUrl = buildUrl('/access');
  const { data: serviceData } = await axios.post(absoluteUrl, user);

  return serviceData;
}

/**
 * Service for check if token is valid.
 * @returns 
 */
export async function checkTokenService() {
  const absoluteUrl = buildUrl('/access');
  const headers = setHeaders();
  const axiosParams = { headers };

  const { data: serviceData } = await axios.get(absoluteUrl, axiosParams);
  return serviceData;
}