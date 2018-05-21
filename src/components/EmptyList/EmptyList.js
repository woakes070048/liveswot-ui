import React from 'react';
import styles from "../SwotHeader/styles";

const EmptyList = () => {
  return (
    <div>
      <div className={`row`} style={styles.root}>
        <div className={`col m12 s12 l12`}>
          <div className={`card`} style={styles.card}>
            <div className={`card-content`} style={styles.cardContent}>
              <div className={`row`} style={{...styles.compactRow, ...styles.layout}}>
                <h6>No SWOT to display</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyList;