const BASE = 'http://localhost:3000';

export const getCurrentRoute = () => {
  return new URL(window.location).pathname;
};