import React from 'react';
import PropTypes from 'prop-types';

import SwotItem from '../SwotItem';
import {localizedText} from '../../utils/index';
import styles from './styles';
import './style.css';


const SwotCard = ({
                    user,
                    swotId,
                    items,
                    text,
                    cardType,
                    onChange,
                    onSubmit,
}) => {

  return (
    <div>
      <form method="POST" onSubmit={ (e) => {
        e.preventDefault();
        onSubmit(swotId, text, cardType);
      } }>
        <div className='input-field' style={styles.inputField}>
          <input
            id={`input-${cardType}`}
            className='validate'
            style={styles.input}
            value={text}
            type='text'
            onChange={onChange}
          />
          <label
            className={ text ? 'active' : ''}
            htmlFor={`input-${cardType}`}
          >
            {`Add ${localizedText().swot.cardType[cardType]}`}
          </label>
        </div>
      </form>
      <div style={styles.cardPanelWrapper}>
        <div className={`card-panel`} style={styles.cardPanel}>
          {
            (items.length > 0 &&
              (<ul style={styles.swotList}>{
                  items.map((item, i) => {
                    return (<SwotItem swotItem={item} key={i} index={i}/>);
                  })
              }</ul>)
            )
            || <h1>{localizedText().swot.cardType[cardType]}</h1>
          }
        </div>
      </div>
    </div>
  );
};

SwotCard.propTypes = {
  swotId: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    swotId: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  })).isRequired,
  cardType: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SwotCard;
