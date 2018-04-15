export const voteContainerStyles = {
  height: '100%',
  width: '25px',
  margin: '0px',
};

export const voteUpContainerStyles = {
  height: '14.5px',
  width:'100%',
  padding: '0px'
};

export const voteUpStyles = (isActive) => ({
  width: 0, height: 0,
  borderLeft: '12.5px solid transparent',
  borderRight: '12.5px solid transparent',
  borderBottom: `10px solid ${isActive ? 'blue' : 'grey'}`,
});

export const scoreContainerStyles = {
  height: '19px',
  width:'100%',
  padding: '0px',
  textAlign: 'center',
};

export const voteDownContainerStyles = {
  height: '14.5px',
    width:'100%',
  padding: '0px'
};

export const voteDownStyles = (isActive) => ({
  width: 0, height: 0,
  borderLeft: '12.5px solid transparent',
  borderRight: '12.5px solid transparent',
  borderTop: `10px solid ${isActive ? 'blue' : 'grey'}`,
  marginTop: '4.5px'
});