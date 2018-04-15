import React from 'react';
import PropTypes from 'prop-types';

import SwotItem from '../SwotItem';
import {localizedText} from '../../utils/index';


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
        <div className='input-field'>
          <input
            className='validate'
            value={text}
            id={`input-${cardType}`}
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
      <div className={`card-panel`} style={{'padding': '1rem 0'}}>
        <div>
          {
            (items.length > 0 &&
              (<ul>{
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
