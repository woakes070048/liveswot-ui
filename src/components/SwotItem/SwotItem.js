import React from 'react';
import PropTypes from 'prop-types';

import {
  swotItemStyles,
  swotItemRowStyles,
  textColumnStyles,
  voteColumnStyles,
  voteContainerStyles
} from './styles';
import VoteButton from '../VoteButton';


const SwotItem = ({swotItem, index}) => {
  return (
    <li style={swotItemStyles(index)}>
      <div className={'row'} style={swotItemRowStyles}>
        <div className={'col m1'}>

        </div>
        <div className={'col m10'} style={textColumnStyles}>
          <span>
            {
              `id:${swotItem.swotItemId};
              text:${swotItem.text};
              score:${swotItem.score};
              `
            }
          </span>
        </div>
        <div className={'col m1'} style={voteColumnStyles}>
          <VoteButton
            score={swotItem.score}
            swotItemId={swotItem.swotItemId}
          />
        </div>
      </div>
    </li>
  );
};

SwotItem.propTypes = {
  swotItem: PropTypes.shape({
    swotItemId: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    creatorId: PropTypes.number.isRequired,
  }).isRequired,
};

export default SwotItem;