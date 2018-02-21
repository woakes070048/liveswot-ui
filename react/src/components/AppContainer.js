import { connect } from 'react-redux';
import { AddItem, VoteItem } from '../actions';

const filterByCardType = (cardType) => {
  return (item, index) => item.cardType === cardType;
};

const mapStateToProps = (state = {
  items: [ { id: '0', text: 'Halo', CardType: 'strength' } ]
}) => {
  const { items } = state;
  return {
    strengths: [ ...items ].filter(filterByCardType('strength')),
    weaknesses: [ ...items ].filter(filterByCardType('weakness')),
    opportunities: [ ...items ].filter(filterByCardType('opportunity')),
    threats: [ ...items ].filter(filterByCardType('threat')),
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
