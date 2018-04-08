export default (state, swotItemId) => {
  const votesByIds = state.votes.byId;
  return Object.keys(votesByIds)
    .filter((voteId) => (
      !!swotItemId ? votesByIds[voteId].swotItemId == swotItemId : true
    ))
    .map((voteId) => (votesByIds[voteId]));
};