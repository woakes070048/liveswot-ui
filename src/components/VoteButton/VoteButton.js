import React from 'react';
import PropTypes from 'prop-types';
import {
  voteContainerStyles,
  voteUpStyles,
  voteUpContainerStyles,
  scoreContainerStyles,
  voteDownContainerStyles,
  voteDownStyles,
} from './styles';


const VoteButton = ({score, isUpActive, isDownActive, swotItemId, userId, onVoteItem, animate}) => (
  <div style={voteContainerStyles}>
    <div style={voteUpContainerStyles}>
      <div
        style={voteUpStyles(isUpActive)}
        onClick={() => {
          onVoteItem(swotItemId, 'up', userId);
          animate();
        }}
      >
      </div>
    </div>
    <div style={scoreContainerStyles}
    >{
      score
    }</div>
    <div style={voteDownContainerStyles}>
      <div
        style={voteDownStyles(isDownActive)}
        onClick={() => {
          onVoteItem(swotItemId, 'down', userId);
          animate();
        }}
      >
      </div>
    </div>
  </div>
);

VoteButton.propTypes = {
  swotItemId: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
  isUpActive: PropTypes.bool.isRequired,
  isDownActive: PropTypes.bool.isRequired,
  onVoteItem: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
};

export default VoteButton;
