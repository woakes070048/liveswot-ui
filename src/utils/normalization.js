export const normalizeDate = (dateString) => {
  return `${dateString.substring(0, 10)} ${dateString.substring(11, 16)}`;
};