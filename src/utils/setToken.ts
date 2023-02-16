import axiosInstance from './api';

function setToken(token: string) {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  localStorage.setItem('accessToken', token);
}

export default setToken;
