import React from 'react';
import styles from './styles';

const props = {
  title: 'Swot Title',
  description: 'Swot Description ...',
};

const SwotHeader = () => {
  const {title, description} = props;
  return (
    <div className={`row`} style={styles.root}>
      <div className={`col m12`}>
        <div className={`card`} style={styles.card}>
          <div className={`card-content`}>
            <span className={`card-title activator`}>
              {title}<i className={`material-icons right`}>more_vert</i>
            </span>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwotHeader;