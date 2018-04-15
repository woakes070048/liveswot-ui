import React from 'react';
import { Button, FontIcon } from 'react-md';
import PropTypes from 'prop-types';


const VoteButton = ({swotItemId, voteType, isActive, onVoteItem, userId}) => (
  <span>
    <Button
      icon
      onClick={() => {
        onVoteItem(swotItemId, voteType, userId);
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
