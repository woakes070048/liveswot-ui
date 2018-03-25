import { host as baseUrl} from '../../config/environment';
import authUtils from "../../utils/auth";


const defaultConfig = {
  timeout: 5000,
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

const apiClient = (endpoint, config) => {

  const url = `${baseUrl}${endpoint}`;
  config = Object.assign(defaultConfig, config);

  const token = authUtils.getToken();
  if (token) {
   config.headers['Authorization'] = `Bearer ${token}`;
  }

  if (config) {
    config.body = JSON.stringify(config.data);
    delete config.data;
  }

  return fetch(url, config)
    .then(response => {
      return response.json();
    });
};

export default apiClient;
