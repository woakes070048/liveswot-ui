// import { replace } from 'react-router-redux';
//
// import {LOGIN_SUCCESS, LOGOUT_ERROR, LOGOUT_SUCCESS} from "../../actions/actionTypes";
// import { withAuthorization } from '../../routes/routes';
// import { getCurrentRoute } from '../../utils/route';
//
// export default (store) => (next) => (action) => {
//   const currentRoute = getCurrentRoute();
//   const { token } = store.getState();
//
//   if (
//     !!withAuthorization.find((route) => route.path === currentRoute) &&
//     !token &&
//     // action.type === replace('').type
//   ) {
//     console.log('authorize');
//     console.log(token);
//     console.log(currentRoute);
//     console.log(action.type);
//     return next(replace('/login'));
//   }
//
//   next(action);
// };