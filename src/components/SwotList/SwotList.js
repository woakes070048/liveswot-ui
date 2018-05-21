import React from 'react';
import styles from '../SwotHeader/styles';

const SwotList = (props) => {
  const swotImg = '';
  const {swotId, title, description, swotDateCreated, creatorUserName} = props;
  return (
    <div>
      <div className={`row`} style={styles.root}>
        <div className={`col m12 s12 l12`}>
          <div className={`card`} style={styles.card}>
            <div className={`card-content`} style={styles.cardContent}>
              <div className={`row`} style={{...styles.compactRow, ...styles.layout}}>
                <div style={styles.left}>
                  <div style={styles.swotImgWrapper}>
                    <span>
                      {(
                        swotImg &&
                        <img
                          alt={title}
                          className='responsive-img'
                          src={swotImg}
                          style={styles.swotImg}
                        />
                      ) || (
                        <div style={styles.swotImgFallbackWrapper}>
                          <div style={styles.swotImgFallback}>
                            ST
                          </div>
                        </div>
                      )}
                    </span>
                  </div>
                </div>
                <div style={styles.mid}>
                  <div className={`row`} style={styles.compactRow}>
                    <div className={`row swot-header`} style={styles.compactRow}>
                      <div className={`col s10 m12 l12`} style={styles.navCol}>
                        <span className={`card-title activator`} style={styles.cardTitle}>
                          <a href={`swots/${swotId}`}>
                            {title}
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className={`row`} style={styles.compactRow}>
                      <div className={`col s12 m12 l12`} style={styles.navCol}>
                        <span>{description}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`swot-header-right`} style={styles.right}>
                  <span className={`card-title activator`}>
                    <span className={`swot-meta`}>
                      created by {creatorUserName} at {swotDateCreated}
                    </span>
                    <i
                      id={`kebab`}
                      className={`material-icons right`}
                      onClick={() => ({})}
                    >
                      more_vert
                    </i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwotList;