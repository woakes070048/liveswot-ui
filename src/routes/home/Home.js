import React from 'react';
import PropTypes from 'prop-types';
import EmptyList from '../../components/EmptyList';
import SwotHeader from '../../components/SwotHeader/SwotHeader';
import SwotList from '../../components/SwotList';


class Home extends React.Component {

  componentDidMount() {
    this.props.onMountFetchSwots();
  }

  render() {
    const {swots, userSwots} = this.props;

    return (
      <div>
        <div>
          <h5>Your swots</h5>
          {(
            userSwots.length > 0 &&
            userSwots.map((swot, i) => (
              <div style={{marginBottom: '1px'}}>
                <SwotList key={i} swot={swot}/>
              </div>))
          ) || <EmptyList />}
        </div>
        <div>
          <h5>Swots you are contributing to</h5>
          {(
            swots.length > 0 &&
            swots.map((swot, i) => (
              <div style={{marginBottom: '1px'}}>
                <SwotList key={i} swot={swot}/>
              </div>))
          ) || <SwotHeader creator={'Empty'} title={`Empty`} swotDateCreated={`Empty`}/>}
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  swots: PropTypes.arrayOf(PropTypes.shape({
    swotId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    creatorId: PropTypes.number.isRequired,
  })).isRequired,
  userSwots: PropTypes.arrayOf(PropTypes.shape({
    swotId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    creatorId: PropTypes.number.isRequired,
  })).isRequired,
};

export default Home;