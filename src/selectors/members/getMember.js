import getSwot from '../swots/getSwot';

const getMember = (state, userId) => {
  const members = state.members.byId;
  return members[userId] ? {...members[userId]} : null;
};

export default getMember;