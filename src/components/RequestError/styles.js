import closeImg from '../../components/SwotHeader/components/AddMember/close_button.png';

const container = (hidden) => ({
  display: hidden ? 'none' : '',
  width: '100%',
  background: '#f99090',
  minHeight: '40px',
  padding: '1px 15px',
  boxShadow: '0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)',
  borderRadius: '2px',
});

const hide = (hidden) => ({
  backgroundImage: `url(${closeImg})`,
  cursor: 'pointer',
  backgroundSize: '100%',
  width: '10px',
  height: '10px',
  position: 'sticky',
  left: '100%',
  top: '0',
  float: 'left',
  display: hidden ? 'none' : '',
});

export default {
  container,
  hide,
};