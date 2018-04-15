export default (state, swotId, cardType) => {
  const swotItemsByIds = state.swotItems.byId;
  return Object.keys(state.swotItems.byId)
    .filter((swotItemId) => (
      (!!swotId ? swotItemsByIds[swotItemId].swotId === swotId : true) &&
      (!!cardType ? swotItemsByIds[swotItemId].cardType === cardType : true)
    ))
    .map((swotItemId) => ({
    ...swotItemsByIds[swotItemId]
  }));
};