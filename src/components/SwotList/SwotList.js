import React from 'react';
import styles from '../SwotHeader/styles.scss';
import {Link} from 'react-router-dom';

const SwotList = (props) => {
  const swotImg = '';
  const {swotId, title, description, swotDateCreated, creatorUserName} = props;
  return (
    <div>
      <div className={`row ${styles.root}`}>
        <div className={`col m12 s12 l12`}>
          <div className={`card ${styles.card}`}>
            <div className={`card-content ${styles["card-content"]}`}>
              <div className={`row ${styles["compact-row"]} ${styles.layout}`}>
                <div className={styles.left}>
                  <div className={styles["swot-img-wrapper"]}>
                    <span>
                      {(
                        swotImg &&
                        <img
                          alt={title}
                          className={`responsive-img ${styles["swot-img"]}`}
                          src={swotImg}
                        />
                      ) || (
                        <div className={styles["swot-img-fallback-wrapper"]}>
                          <div className={styles["swot-img-fallback"]}>
                            ST
                          </div>
                        </div>
                      )}
                    </span>
                  </div>
                </div>
                <div className={styles.mid}>
                  <div className={`row ${styles["compact-row"]}`}>
                    <div className={`row swot-header ${styles["compact-row"]}`}>
                      <div className={`col s10 m12 l12 ${styles["nav-col"]}`}>
                        <span className={`card-title activator ${styles["card-title"]}`}>
                          <Link to={`swots/${swotId}`}>
                            {title}
                          </Link>
                        </span>
                      </div>
                    </div>
                    <div className={`row ${styles["compact-row"]}`}>
                      <div className={`col s12 m12 l12 ${styles["nav-col"]}`}>
                        <span>{description}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`swot-header-right ${styles.right}`}>
                  <span className={`card-title activator ${styles["card-title"]}`}>
                    <span className={`${styles["swot-meta"]}`}>
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