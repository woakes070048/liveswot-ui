const root = {
  marginBottom: 0,
};

const card = {
  margin: 0,
};

const dropDown = (active) => ({
  display: active ? 'block' : 'none',
  width: '200px',
  position: 'absolute',
  right: `${24}px`,
  top: `${24}px`,
  margin: '0',
  lineHeight: '12px',
  background: 'rgb(164, 212, 159)',
  boxShadow: `0px 8px 16px 0px rgba(0,0,0,0.2)`,
});

const li = {
  padding: '12px',
};

const liSpan = {
  color: 'black'
};

const dropDownItemIcon = (color) => ({
  marginTop: '-6px',
  color: color,
});

export default {
  root,
  card,
  dropDown,
  li,
  liSpan,
  dropDownItemIcon,
};