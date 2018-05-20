const getSwotIdFromUrl = (state) => {
  const swotId = state
    && state.match
    && state.match.params
    && state.match.params.swotId;

  if (!swotId) {
    return;
  }

  return parseInt(swotId, 10);
};

export default getSwotIdFromUrl;