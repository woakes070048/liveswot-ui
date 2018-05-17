import {connect} from 'react-redux';
import getSwotIdFromUrl from '../../selectors/url/getSwotIdFromUrl';
import getSwot from '../../selectors/swots/getSwot';
// import getMember from '../../selectors/members/getMember';

export default connect(
  (state, ownProps) => {
    const swotId = getSwotIdFromUrl(ownProps);
    const swot = getSwot(state, swotId);
    // const {creatorId} = swot;
    // const creatorUsername = getMember(state, creatorId);

    return {
      title: swot.title || '',
      description: swot.description || '',
      swotCreator: swot.creatorId || '',
      swotDateCreated: swot.createdAt || '', // '4.58 PM Tue May 1 2018'
    };
  },
  () => ({}),
);
