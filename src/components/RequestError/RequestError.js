import styles from './styles';
import React from 'react';

class RequestError extends React.Component {
  constructor(props) {
    super(props);
    this.state = {closed: false};

    this.close = this.close.bind(this);
  }

  close() {this.setState({closed: true});}

  render() {
    const {errors} = this.props;
    const {closed} = this.state;
    const hidden = closed || errors.length === 0;

    return (
      <div style={{
        margin: '0',
        padding: '0',
        position: 'relative',
      }}>
        <div
          style={styles.hide(hidden)}
          onClick={() => this.close()}
        >
        </div>
        <div
          style={styles.container(hidden)}
          onClick={() => this.close()}
        >
          <p>Error(s):</p>
          {errors.map((error, i) => (
            <p key={i}>{error}</p>
          ))}
        </div>
      </div>
    );
  }
}

export default RequestError;