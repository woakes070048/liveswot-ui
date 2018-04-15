
const borderColor = '#e6e6e6';
const widthPercent = 96;
const marginLeftPercent = (100 - widthPercent) / 2;
const marginRightPercent = marginLeftPercent;

export const swotItemStyles = (index) => ({
  backgroundColor: '#',
  width: `${widthPercent}%`,
  minHeight: '50px',
  borderTop: index === 0 ? `1px solid ${borderColor}` : '',
  borderBottom: `1px solid ${borderColor}`,
  padding: `0.5rem 0.5rem`,
  marginLeft: `${marginLeftPercent}%`,
  marginRight: `${marginRightPercent}%`,
});

export const swotItemRowStyles = {
  margin: '0'
};

export const textColumnStyles = {
  display: 'flex',
  flexWrap: 'wrap',
};

export const voteColumnStyles = {
  height: '50px',
    padding: '0 5.28px'
};