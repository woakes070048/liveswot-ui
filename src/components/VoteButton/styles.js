export const voteContainerStyles = {
  height: '100%',
  width: '25px',
  margin: '0px',
};

export const voteUpContainerStyles = {
  height: '7px',
  width:'100%',
  padding: '0px'
};

export const voteUpStyles = (isActive) => ({
  width: 0, height: 0,
  borderLeft: '12.5px solid transparent',
  borderRight: '12.5px solid transparent',
  borderBottom: `8px solid ${isActive ? 'rgb(89, 156, 4)' : 'grey'}`,
});

export const scoreContainerStyles = {
  fontSize: '0.9rem',
  height: '12px',
  width:'100%',
  padding: '0px',
  textAlign: 'center',
};

export const voteDownContainerStyles = {
  height: '11px',
  width:'100%',
  padding: '0px'
};

export const voteDownStyles = (isActive) => ({
  width: 0, height: 0,
  borderLeft: '12.5px solid transparent',
  borderRight: '12.5px solid transparent',
  borderTop: `8px solid ${isActive ? 'rgb(89, 156, 4)' : 'grey'}`,
  marginTop: '4.5px'
});