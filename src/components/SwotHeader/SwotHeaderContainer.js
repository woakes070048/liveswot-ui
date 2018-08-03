import {connect} from 'react-redux';
import getSwotIdFromUrl from '../../store/selectors/url/getSwotIdFromUrl';
import getSwot from '../../store/selectors/swots/getSwot';
import getSwotCreator from '../../store/selectors/swots/getSwotCreator';
import {normalizeDate} from '../../utils/normalization';

export default connect(
  (state, ownProps) => {
    const swotId = getSwotIdFromUrl(ownProps);
    const swot = getSwot(state, swotId);
    const creator = getSwotCreator(state, swotId);

    return {
      creator: creator || {userName: ''},
      title: swot.title || '',
      description: swot.description || '',
      swotDateCreated: (
        swot.createdAt && normalizeDate(swot.createdAt)
      ) || '',
    };
  },
  () => ({}),
);
