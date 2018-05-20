import React from 'react';
import styles from './styles';
import RequestButton from '../../components/RequestButton';

class Signup extends React.Component {

  constructor(props) {
    super(props);

    this.signup = this.signup.bind(this);
  }

  signup(e) {
    e.preventDefault();
    this.props.signup(
      this.refs.email.value,
      this.refs.username.value,
      this.refs.password.value,
    );
  }

  render() {
    const {user, disabled} = this.props;

    return (
      <div className={`row`}>
        <div className={`col s1 m3 l3`}></div>
        <div className={`col s10 m6 l6`}>
          <div className={`card`} style={styles.card}>
            <div className={`row`}>
              <div className={`col s1 m1 l1`}></div>
              <div className={`col s10 m10 l10`}>
                <h4 style={styles.title}>Signup on LiveSWOT</h4>
                <form onSubmit={this.signup} >
                  <input
                    type='email'
                    ref='email'
                    placeholder={`Email`}
                  />
                  <input
                    type='text'
                    ref='username'
                    placeholder={`Username`}
                  />
                  <input
                    type='password'
                    ref='password'
                    placeholder={`Password`}
                  />
                  <RequestButton
                    text={`signup`}
                    disabled={disabled}
                    requestedItem={user}
                    onClick={this.signup}
                  />
                </form>
                <p>Already signed up? Login <a href={`login`}>here</a></p>
              </div>
              <div className={`col s1 m1 l1`}></div>
            </div>
          </div>
        </div>
        <div className={`col s1 m3 l3`}></div>
      </div>
    );
  }
}

export default Signup;
