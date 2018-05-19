import getSwot from './getSwot';
import getMember from '../members/getMember';

const getSwotCreator = (state, swotId) => {
  const swot = getSwot(state, swotId);

  if (!swot) {
    return null;
  }

  const {creatorId} = swot;
  
  return getMember(state, creatorId);
};

export default getSwotCreator;