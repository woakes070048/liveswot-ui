import { connect } from 'react-redux';
import { AddItem, VoteItem } from '../actions';

const filterByBoardType = (boardType) => {
  return (item, index) => item.boardType === boardType;
};

const mapStateToProps = (state = { items: [
  { id: '0', text: 'Halo', boardType: 'strength'}
]}) => {
  const items = state.items;
  return {
    strengths: [ ...items ].filter(filterByBoardType('strength')),
    weaknesses: [ ...items ].filter(filterByBoardType('weakness')),
    opportunities: [ ...items ].filter(filterByBoardType('opportunities')),
    threats: [ ...items ].filter(filterByBoardType('threats')),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAddItem: () => { dispatch(AddItem()); },
    onVoteItem: () => { dispatch(VoteItem()); },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
