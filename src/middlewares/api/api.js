import apiClient from './apiClient';
import { CALL_API } from '../../actions/actionTypes';

const convertIntoNormalAction = (action, data) => {
  if (!!data.errors) {
    delete action.data;
  }
  const normalAction = Object.assign({}, action, data);
  delete normalAction.types;
  return normalAction;
};

const api = (store) => (next) => (action) => {
  if (action.type !== CALL_API) {
    return next(action);
  }

  const { types, method, endpoint, data } = action;

  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('INVALID API ACTION TYPES: ' +
    'Api Action must have `types` as an array of length 3');
  }

  if (typeof endpoint !== 'string') {
    throw new Error('INVALID API ENDPOINT: ' +
    'Api Action must have `endpoint` of type string')
  }

  const [ requestActionType, successActionType, errorActionType ] = types;

  const config = { data: {...data}, method };

  next(convertIntoNormalAction(action, { type: requestActionType }));

  return apiClient(endpoint, config)
    .then(response => {
      next(convertIntoNormalAction(action, {
        type: successActionType,
        data: response.data.data,
      }));
    })
    .catch(response => {
      if (response.data && response.data.errors) {
        return next(convertIntoNormalAction(action, {
          type: errorActionType,
          errors: response.data.errors,
        }));
      } else if (response.error) {
        return next(convertIntoNormalAction(action, {
          type: errorActionType,
          errors: [ response.error ],
        }));
      }
      next(convertIntoNormalAction(action, {
        type: errorActionType,
        errors: [
          'Error occurred but response does not provide specific error message',
          response,
        ],
      }));
  });
};

export default api;
