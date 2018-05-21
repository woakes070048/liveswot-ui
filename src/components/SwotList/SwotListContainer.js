import {connect} from 'react-redux';
import {normalizeDate} from '../../utils/normalization';

export const mapStateToProps = (state, ownProps) => {
  const {swot} = ownProps;

  return {
    creatorUserName: 'anonymous',
    swotId: swot.swotId,
    title: swot.title,
    description: swot.description,
    swotDateCreated: swot.createdAt && normalizeDate(swot.createdAt),
  };
};

export default connect(
  mapStateToProps,
  () => ({}),
);