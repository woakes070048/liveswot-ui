import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import VoteButton from '../VoteButton';


const SwotItem = ({swotItem, index}) => {
  const profileImg = 'https://scontent.fyto1-1.fna.fbcdn.net/v/t1.0-9/25507801_10214600576038909_8129308682006032833_n.jpg?oh=f6a69fa4bb09fa9a11b1e87c176dc732&oe=5B382481';

  return (
    <li style={styles.swotItem(index)}>
      <div className={'row'} style={styles.swotItemRow}>
        <div className={'col s1 m1 l1'} style={styles.left}>
          <div style={styles.creatorImgWrapper}>
            <img
              className={`circle img-responsive`}
              src={profileImg}
              style={styles.creatorImg}
              alt={`item creator: ${swotItem.creatorId}`}
            />
          </div>
        </div>
        <div className={'col s10 m10 l10'} style={styles.textColumn}>
          <span>{`${swotItem.text}`}</span>
        </div>
        <div className={'col s1 m1 l1'} style={styles.voteColumn}>
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