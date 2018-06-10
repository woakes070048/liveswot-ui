export default (state, swotId, cardType) => {
  const swotItemsByIds = state.swotItems.byId;

  return state.swotItems.ids
    .filter((swotItemId) => (
      (!!swotId ? swotItemsByIds[swotItemId].swotId === swotId : true) &&
      (!!cardType ? swotItemsByIds[swotItemId].cardType === cardType : true)
    ))
    .map((swotItemId) => ({
      ...swotItemsByIds[swotItemId]
    }));
};