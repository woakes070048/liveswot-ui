const getSwot = (state, swotId) => {
  const swot = state.swots.byId[swotId];
  return swot ? swot : null;
};

export default getSwot;