import React from 'react';
import { Button, FontIcon } from 'react-md';
import PropTypes from 'prop-types';


const VoteButton = ({swotItemId, voteType, isActive, onVoteItem}) => (
  <span>
    <Button
      icon
      onClick={() => {
        console.log('@@@@@@@@@@@@@@@@@@');
        console.log(`onVoteItem(${swotItemId}, ${voteType})`);
        console.log('@@@@@@@@@@@@@@@@@@');
        onVoteItem(swotItemId, voteType);
      }}
      iconEl={
        <FontIcon
          secondary={ voteType }
          >
          { voteType === 'up' ? `arrow_drop_up` : `arrow_drop_down` }
        </FontIcon>
    } />
  </span>
);

VoteButton.propTypes = {
  swotItemId: PropTypes.number.isRequired,
  voteType: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onVoteItem: PropTypes.func.isRequired,
};

export default VoteButton;
