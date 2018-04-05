import { connect } from 'react-redux';
import { CreateSwotItem, Vote, FetchSwotItems } from '../../actions';

const filterByCardType = (cardType) => {
  return (item, index) => item.cardType === cardType;
};

const mapStateToProps = ({
  items = [ { id: '0', text: 'Halo', CardType: 'strength' } ]
}) => {
  return {
    strengths: [ ...items ].filter(filterByCardType('strength')),
    weaknesses: [ ...items ].filter(filterByCardType('weakness')),
    opportunities: [ ...items ].filter(filterByCardType('opportunity')),
    threats: [ ...items ].filter(filterByCardType('threat')),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onMountFetchItems: () => { dispatch(FetchSwotItems()); },
    onAddItem: () => { dispatch(CreateSwotItem()); },
    onVoteItem: () => { dispatch(Vote()); },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
