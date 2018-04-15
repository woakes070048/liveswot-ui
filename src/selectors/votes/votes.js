export default (state, swotItemId) => {
  const votesBySwotItemIds = state.votes.bySwotItemId;
  return getVoteList(votesBySwotItemIds, swotItemId);
};