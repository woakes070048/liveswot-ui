const getVotes = (state, swotItemId) => {

  if ((typeof state === 'undefined') || (typeof swotItemId === 'undefined')) {
    throw Error('Must provide `state` and `swotItemId`');
  }

  const votes = state.votes.byId;

  return Object.keys(votes)
    .filter(voteId => votes[voteId].swotItemId === swotItemId)
    .map(voteId => ({...votes[voteId]}));
};

export default getVotes;