import axios from 'axios';

import { host } from '../config/environment';


const axiosInstance = axios.create({
  baseURL: host,
  timeout: 5000,
  headers: {},
});

// const apiClient = (config) => {
//   return axiosInstance;
// }

export default axiosInstance;
