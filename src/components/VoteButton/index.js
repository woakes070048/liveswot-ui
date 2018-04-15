import {withRouter} from 'react-router';

import VoteButton from './VoteButton';
import VoteButtonContainer from './VoteButtonContainer';


export default withRouter(VoteButtonContainer(VoteButton));
