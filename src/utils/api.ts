/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable import/no-cycle */
import axios, { AxiosInstance } from 'axios';

// export default axios.create({
//   baseURL: 'https://localhost:7057',
//   headers: {
//     Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//   },
// });

// const api = axios.interceptors.request.use(
//   async (config) => {
//     if (!config.headers.Authorization) {
//       const token = localStorage.getItem('accessToken');

//       if (token) {
//         // eslint-disable-next-line no-param-reassign
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// const token = localStorage.getItem('accessToken');

// const api: AxiosInstance = axios.create({
//   baseURL: 'https://localhost:7057',
//   headers: { Authorization: `Bearer ${token}` },
// });

// api.interceptors.request.use((request) => {
//   request.headers.Authorization = `Bearer ${token}`;
//   return request;
// });

const token = localStorage.getItem('accessToken');
console.log(localStorage);
const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://localhost:7057',
  timeout: 5000,
  headers: {
    common: {
      Authorization: `Bearer ${token}`,
    },
    'Content-Type': 'application/json',
  },
});

// axiosInstance.interceptors.request.use((config) => {
//   // eslint-disable-next-line no-param-reassign
//   config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

export default axiosInstance;
