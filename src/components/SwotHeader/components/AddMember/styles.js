import img from './close_button.png';

const row = (hidden) => ({
  margin: '0 0 0 0',
  padding: '0 0 0 0',
  display: hidden ? 'none' : '',
});

const noMargin = {
  margin: '0 0 0 0',
};

const noPadding = {
  padding: ' 0 0 0 0'
};

const inputContainer = {
  boxSizing: 'border-box',
  display: 'inline-block',
  position: 'relative',
  width: '100%',
};

const input = {
  margin: '0',
  textAlign: 'left',
  width: '100%',
  outline: '0'
};

const closeButton = {
  zIndex: '3',
  position: 'absolute',
  width: '1rem',
  height: '1rem',
  top: '0.5rem',
  right: '0.5rem',
  backgroundImage: `url(${img})`,
  backgroundSize: '100%',
  cursor: 'pointer',
};

export default {
  row,
  noMargin,
  noPadding,
  inputContainer,
  input,
  closeButton,
};