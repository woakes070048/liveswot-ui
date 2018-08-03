import {connect} from 'react-redux';

import {getSwotItems} from '../../store/selectors/swotItems';
import {FetchMembers, FetchSwotItems, FetchSwots, FetchVotes} from '../../store/actions';
import getSwot from '../../store/selectors/swots/getSwot';


const mapStateToProps = (state, ownProps) => {
  const swotItems = getSwotItems(state);
  const swotId = ownProps.match.params.swotId;
  const swot = getSwot(state, swotId);
  const {swots} = state;

  return {
    swots,
    swot,
    strengths: swotItems.filter((e) => e.cardType === 'strength'),
    weaknesses: swotItems.filter((e) => e.cardType === 'weakness'),
    opportunities: swotItems.filter((e) => e.cardType === 'opportunity'),
    threats: swotItems.filter((e) => e.cardType === 'threat')
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onMountFetchItems() {
      const swotId = ownProps.match.params.swotId;
      dispatch(FetchSwotItems(swotId));
      },
    onMountFetchVotes() {
      const swotId = ownProps.match.params.swotId;
      dispatch(FetchVotes(swotId));
      },
    onMountFetchSwots() {
      dispatch(FetchSwots());
      },
    onMountFetchMembers() {
      const swotId = ownProps.match.params.swotId;
      dispatch(FetchMembers(swotId));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
