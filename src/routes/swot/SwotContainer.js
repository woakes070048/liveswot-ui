import {connect} from 'react-redux';

import {getSwotItems} from '../../selectors/swotItems';
import {FetchSwotItems} from '../../actions';


const mapStateToProps = (state, ownProps) => {
  const swotItems = getSwotItems(state);
  return {
    strengths: swotItems.filter((e) => e.cardType === 'strength'),
    weaknesses: swotItems.filter((e) => e.cardType === 'weakness'),
    opportunities: swotItems.filter((e) => e.cardType === 'opportunity'),
    threats: swotItems.filter((e) => e.cardType === 'threat')
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    onMountFetchItems: () => {
      const swotId = ownProps.match.params.swotId;
      dispatch(FetchSwotItems(swotId));
      },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
