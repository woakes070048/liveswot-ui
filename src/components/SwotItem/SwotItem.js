import React from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';

import styles from './styles';
import './styles.css';
import VoteButton from '../VoteButton';


class SwotItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const profileImg = 'https://scontent.fyto1-1.fna.fbcdn.net/v/t1.0-9/25507801_10214600576038909_8129308682006032833_n.jpg?oh=f6a69fa4bb09fa9a11b1e87c176dc732&oe=5B382481';
    const {swotItem, votes, index, hidden, animate} = this.props;

    // if (this.state.hidden) {
    //   setTimeout(() => {
    //     this.setState({hidden: false});
    //   }, 1000);
    //
    //   return null;
    // }

    return (
      <li style={styles.swotItem(index)} className={`swot-item ${hidden ? '' : 'show'}`}>
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
              animate={animate}
              score={votes}
              swotItemId={swotItem.swotItemId}
            />
          </div>
        </div>
      </li>
    );
  }
}

SwotItem.propTypes = {
  swotItem: PropTypes.shape({
    swotItemId: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    creatorId: PropTypes.number.isRequired,
  }).isRequired,
};

export default SwotItem;