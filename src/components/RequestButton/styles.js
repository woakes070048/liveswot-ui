const button = (requestedItem) => ({
  width: '100%',
  cursor: requestedItem.isLoading ? 'wait' : '',
  pointerEvents: 'auto',
  border: '0 0 0 0 !important',
});

export default {
  button,
};