import { connect } from 'react-redux';

const mapStateToProps = (props = {
  strengths: [], weaknesses: [],
  opportunities: [], threats: []
}) => {
  return Object.assign({}, {
    strengths: [].concat(props.strengths),
    weaknesses: [].concat(props.weaknesses),
    opportunities: [].concat(props.opportunities),
    threats: [].concat(props.threats),
  });
};

const mapDispatchToProps = (state, ownProps) => {
  return {
    ...state, ...ownProps
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
