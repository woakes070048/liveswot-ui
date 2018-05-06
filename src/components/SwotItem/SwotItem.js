import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import VoteButton from '../VoteButton';


const SwotItem = ({swotItem, index}) => {
  return (
    <li style={styles.swotItem(index)}>
      <div className={'row'} style={styles.swotItemRow}>
        <div className={'col m1'}>

        </div>
        <div className={'col m10'} style={styles.textColumn}>
          <span>{`${swotItem.text}`}</span>
        </div>
        <div className={'col m1'} style={styles.voteColumn}>
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