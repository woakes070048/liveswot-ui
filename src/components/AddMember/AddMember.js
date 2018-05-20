import React from 'react';
import styles from './styles';

const AddMember = ({
                     userName='',
                     updateUserName,
                     hidden = true,
                     hide,
                     addMember,
}) => {
  return (
    <div className={`row`} style={styles.row(hidden)}>
      <div className={`col s12 m12 l12`} style={styles.noPadding}>
        <form method={`POST`} onSubmit={(e) => {
          e.preventDefault();
          addMember(userName);
          hide();
        }}>
          <div style={styles.inputContainer}>
            <input
              value={userName}
              onChange={updateUserName}
              type={`text`}
              placeholder={'Add people to SWOT by username'}
              style={styles.input}
            />
            <div
              onClick={() => {console.log('hide!'); hide();}}
              style={styles.closeButton}>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMember;