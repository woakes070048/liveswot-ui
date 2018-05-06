const root = {
  marginBottom: 0,
};

const layout = {
  display: 'table',
  width: '100%',
  tableLayout: 'fixed',
  borderSpacing: '0',
};

const left = {
  display: 'table-cell',
  width: '64px',
  height: '64px',
};

const mid = {
  display: 'table-cell',
  width: '100%',
  height: '64px',
};

const right = {
  textAlign: 'right',
  display: 'table-cell',
  height: '64px',
  verticalAlign: 'top',
};

const card = {
  margin: 0,
};

const dropDown = (active) => ({
  display: active ? 'block' : 'none',
  width: '200px',
  position: 'absolute',
  right: `${12}px`,
  top: `${12}px`,
  margin: '0',
  lineHeight: '12px',
  background: 'rgb(164, 212, 159)',
  boxShadow: `0px 8px 16px 0px rgba(0,0,0,0.2)`,
  zIndex: 3,
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

const cardContent = {
  padding: '6px 6px 6px 6px',
};

const cardTitle = {
  margin: '0',
};

const compactRow = {
  margin: '0'
};

const compactCol = {
  padding: '0'
};

const navCol = {
  padding: '0 0 0 6px'
};

const swotImgWrapper = {
  height: '64px',
  maxWidth: '64px',
  padding: '0px 0px 0px 0px',
};

const swotImg = {
  height: '100%',
};

export default {
  root,
  layout,
  left, mid, right,
  card,
  cardContent,
  cardTitle,
  dropDown,
  li,
  liSpan,
  dropDownItemIcon,
  compactRow,
  compactCol,
  navCol,
  swotImgWrapper,
  swotImg,
};
