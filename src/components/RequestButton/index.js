import React from 'react';
import './styles.css';
import styles from './styles';

const RequestButton = ({text, onClick, requestedItem}) => {
  const disabled = requestedItem.isLoading ? 'disabled' : '';
  return (
    <input
      type={`submit`}
      className={`waves-effect waves-light btn no-border ${disabled}`}
      style={styles.button(requestedItem)}
      onClick={onClick}
      value={text}
    />
  );
};

export default RequestButton;