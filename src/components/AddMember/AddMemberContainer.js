import {connect} from 'react-redux';
import {AddMember} from '../../actions';

export const mapStateToProps = () => ({});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  addMember: (userName) => {
    if (!userName) {
      return;
    }

    const {swotId} = ownProps.match.params;
    dispatch(AddMember(swotId, userName));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);