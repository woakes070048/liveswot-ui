const button = (requestedItem) => ({
  width: '100%',
  cursor: requestedItem.isLoading ? 'wait' : '',
  pointerEvents: 'auto',
});

export default {
  button,
};