import React from 'react';


class Home extends React.Component {

  componentDidMount() {
    // this.dispatch(FetchTeams());
    // this.dispatch(FetchSwots());
  }

  render() {
    const {
      swots = [], teams = [], userSwots = [],
    } = this.props;

    return (
      <div>
        <div>
          <p>Your swots:</p>
          <ul>
            {userSwots.map((swot) => (
              <li>{swot}</li>
            ))}
          </ul>
        </div>
        <div>
          <p>Swots you are contributing to:</p>
          <ul>
            {swots.map((swot) => (
              <li>{swot}</li>
            ))}
          </ul>
        </div>
        <div>
          <p>Your teams:</p>
          <ul>
            {teams.map((team) => (
              <li>{team}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;