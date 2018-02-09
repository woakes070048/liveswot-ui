import { connect } from 'react-redux';
import Swot from '../../components/Swot';

const mapStateToProps = (props = {
  strengths = [], weaknesses = [],
  opportunities = [], threats = [],
) => {
  return Object.assign({}, {
    strengths: [].concat(props.strengths),
    weaknesses: [].concat(props.weaknesses),
    opportunities: [].concat(props.opportunities),
    threats: [].concat(props.threats),
  });
};

const mapDispatchToProps = (addItem, voteItem) => {
  return {
    onAddItem: () => { addItem(); },
    onVoteItem: () => { voteItem(); },
  }
}

const SwotContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Swot);

export default SwotContainer;
