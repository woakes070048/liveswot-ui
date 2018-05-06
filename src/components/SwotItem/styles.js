
const borderColor = '#e6e6e6';
const widthPercent = 96;
const marginLeftPercent = (100 - widthPercent) / 2;
const marginRightPercent = marginLeftPercent;

export const swotItem = (index) => ({
  backgroundColor: '#',
  width: `${widthPercent}%`,
  minHeight: '50px',
  borderTop: index === 0 ? `1px solid ${borderColor}` : '',
  borderBottom: `1px solid ${borderColor}`,
  padding: `0.5rem 0.5rem`,
  marginLeft: `${marginLeftPercent}%`,
  marginRight: `${marginRightPercent}%`,
});

export const swotItemRow = {
  margin: '0'
};

export const textColumn = {
  display: 'flex',
  flexWrap: 'wrap',
};

export const voteColumn = {
  height: '50px',
  padding: '0 5.28px'
};

export default {
  swotItem,
  swotItemRow,
  textColumn,
  voteColumn,
};