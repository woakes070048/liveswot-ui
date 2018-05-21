import {connect} from 'react-redux';
import {CreateSwot} from '../../actions';

export default connect(
  () => ({}),
  (dispatch) => ({
    onSubmit: (title, description) => {
      dispatch(CreateSwot(title, description));
    },
  }),
);