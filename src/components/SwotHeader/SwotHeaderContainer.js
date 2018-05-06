import {connect} from 'react-redux';


export default connect(
  () => {
    return {
      title: 'Swot Title',
      description: 'Swot Description ...',
      swotCreator: 'imranariffin',
      swotDateCreated: '4.58 PM Tue May 1 2018'
    };
  },
  () => ({}),
);