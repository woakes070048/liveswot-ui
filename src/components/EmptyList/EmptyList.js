import React from 'react';
import styles from "../SwotHeader/styles";

const EmptyList = ({isLoading}) => {
  let text = 'No SWOT to display';

  if (isLoading) {
    text = 'Loading ...';
  }

  return (
    <div>
      <div className={`row`} style={styles.root}>
        <div className={`col m12 s12 l12`}>
          <div className={`card`} style={styles.card}>
            <div className={`card-content`} style={styles.cardContent}>
              <div className={`row`} style={{...styles.compactRow, ...styles.layout}}>
                <h6>{text}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyList;