export default (state, swotId) => {
  const swotItemsByIds = state.swotItems.byId;
  return Object.keys(state.swotItems.byId)
    .filter((swotItemId) => (
      !!swotId ? swotItemsByIds[swotItemId].swotId == swotId : true
    ))
    .map((swotItemId) => ({
    ...swotItemsByIds[swotItemId]
  }));
};