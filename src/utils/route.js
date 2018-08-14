export const getCurrentRoute = () => {
  return new URL(window.location).pathname;
};
