import React from 'react';

import styles from './styles';

const RequestButton = ({text, onClick, requestedItem}) => {
  const disabled = requestedItem.isLoading ? 'disabled' : '';
  return (
    <a
      className={`waves-effect waves-light btn ${disabled}`}
      style={styles.button(requestedItem)}
      onClick={onClick}
    >
      {text}
    </a>
  );
};

export default RequestButton;