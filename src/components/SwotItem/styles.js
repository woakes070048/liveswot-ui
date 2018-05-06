
const borderColor = '#e6e6e6';
const widthPercent = 96;
const marginLeftPercent = (100 - widthPercent) / 2;
const marginRightPercent = marginLeftPercent;

export const swotItem = (index) => ({
  backgroundColor: '#',
  width: `${widthPercent}%`,
  minHeight: '32px',
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
  height: '32px',
  padding: '0 5.28px',
};

export const left = {
  padding: '0',
};

export const creatorImgWrapper = {
  width: '32px',
  height: '32px',
};

export const creatorImg = {
  height: '100%',
  width: '100%',
};

export default {
  swotItem,
  swotItemRow,
  textColumn,
  voteColumn,
  left,
  creatorImgWrapper,
  creatorImg,
};