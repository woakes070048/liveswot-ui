import axios from 'axios';

import { host } from '../../config/environment';
import authUtils from "../../utils/auth";


const axiosInstance = axios.create({
  baseURL: host,
  timeout: 5000,
  headers: {},
});

const apiClient = () => {

  return {
    request: (endpoint, {
      method = 'GET',
      headers = {
        'Authorization': '',
        'Content-Type': 'application/json',
      },
      data = {},
    }) => {
      const config = { url: endpoint, method, headers, data };

      const token = authUtils.getToken();
      config.headers['Authorization'] = token ? `Bearer ${token}` : 'Bearer';

      return axiosInstance.request(config);
    }
  };
};

export default apiClient();
