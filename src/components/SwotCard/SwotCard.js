import React from 'react';
import 'preact-material-components/List/style.css';
import 'preact-material-components/TextField/style.css';
import { TextField, Card, CardTitle, CardText } from 'react-md';
import PropTypes from 'prop-types';

import SwotItem from '../SwotItem';
import { localizedText } from '../../utils/index';


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
        <TextField
          id="id-is-required"
          onChange={onChange}
          value={text}
          label={localizedText().swot.cardType[cardType]}
          lineDirection="center"
          placeholder={`Add ${localizedText().swot.cardType[cardType]}`}
        />
      </form>
      <Card className='swot-card'>
        <CardText>
          {
            (items.length > 0 &&
              (<ul>{
                  items.map((item, i) => (<SwotItem swotItem={item} key={i}/>))
              }</ul>)
            )
            || <CardTitle title={localizedText().swot.cardType[cardType]} />
          }
        </CardText>
      </Card>
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
