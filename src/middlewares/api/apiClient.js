import { host as baseUrl} from '../../config/environment';
import authUtils from "../../utils/auth";


const defaultConfig = {
  timeout: 5000,
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

const handleSuccessAndError = (response) => {
  return new Promise((resolve, reject) => {
    console.log(response);
    response.json().then((data) => {
      const jsonResponse = {
        ok: response.ok,
        status: response.status,
        statusText: response.statusText,
        data
      };
      if (response.status >= 400) {
        return reject(jsonResponse);
      }
      return resolve(jsonResponse);
    });
  });
};

const saveToken = (response) => {
  console.log(response);
  if (!response.data || !response.data.user || !response.data.user.token) {
    return response;
  }

  const token = response.data.user.token;
  authUtils.saveToken(token);

  return response;
};

export default (endpoint, config) => {

  const url = `${baseUrl}${endpoint}`;
  config = Object.assign(defaultConfig, config);

  const token = authUtils.getToken();
  if (token) {
   config.headers['Authorization'] = `Bearer ${token}`;
  }

  if (config && config.data) {
    config.body = JSON.stringify(config.data);
    delete config.data;
  }

  return fetch(url, config)
    .then(handleSuccessAndError)
    .then(saveToken);
};
