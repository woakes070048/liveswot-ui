import React from 'react';
import PropTypes from 'prop-types';


const SwotItem = ({swotItem}) => {
  return (
    <li>{
      `
      id:${swotItem.swotItemId};
      text:${swotItem.text};
      score:${swotItem.score};
      `
    }</li>
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