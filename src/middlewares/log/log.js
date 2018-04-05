
const log = store => next => action => {
  console.log("------------ Action LOG ------------");
  console.log("action:");
  console.log(action);
  console.log("state:");
  console.log(store.getState());
  console.log("------------------------------------");
  return next(action);
};

export default log;