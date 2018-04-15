
const borderColor = '#e6e6e6';

const swotItemStyles = (index) => ({
  backgroundColor: '#',
  width: '100%',
  minHeight: '50px',
  borderTop: index === 0 ? `1px solid ${borderColor}` : '',
  borderBottom: `1px solid ${borderColor}`,
  padding: `0.5rem 0.5rem`,
});

export default swotItemStyles;