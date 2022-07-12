export function buildUrl(url = '') {
  return `${process.env.REACT_APP_SERVER_HOST}${url}`;
}

export function setHeaders() {
  const token = localStorage.getItem('x_token');
  const headers = {};

  if (token) {
    headers['Authorization'] = token;
  }

  return headers;
}