import React from 'react';
import PropTypes from 'prop-types';

import swotItemStyles from './styles';
// import './styles.css'

const SwotItem = ({swotItem, index}) => {
  console.log(index);
  return (
    <li style={swotItemStyles(index)}>
      <div className={'row'} style={{
        margin: '0'
      }}>
        <div className={'col m1'}>

        </div>
        <div className={'col m10'} style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}>
          <span>
            {
              `id:${swotItem.swotItemId};
              text:${swotItem.text};
              score:${swotItem.score};
              `
            }
          </span>
        </div>
        <div className={'col m1'} style={{
          height: '50px',
          padding: '0 5.28px'
        }}>
          <div style={{
            // border:'1px solid black',
            height: '100%',
            width: '25px',
            margin: '0px',
          }}>
            <div style={{
              height: '14.5px',
              width:'100%',
              padding: '0px'
            }}>
              <div className={'vote-up'} style={{
                width: 0, height: 0,
                borderLeft: '12.5px solid transparent',
                borderRight: '12.5px solid transparent',
                borderBottom: '10px solid grey'
              }}>

              </div>
            </div>
            <div style={{
              height: '19px',
              width:'100%',
              padding: '0px',
              textAlign: 'center',
            }}>0</div>
            <div style={{
              height: '14.5px',
              width:'100%',
              padding: '0px'
            }}>
              <div className={'vote-down'} style={{
                width: 0, height: 0,
                borderLeft: '12.5px solid transparent',
                borderRight: '12.5px solid transparent',
                borderTop: '10px solid grey',
                marginTop: '4.5px'
              }}>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
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