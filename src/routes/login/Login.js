import React from 'react';
import styles from './styles';
import RequestButton from '../../components/RequestButton';
import RequestError from "../../components/RequestError/RequestError";

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }

  login(e) {
    e.preventDefault();
    this.props.login(this.refs.email.value, this.refs.password.value);
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
                <h4 style={styles.title}>Login to LiveSWOT</h4>
                <form onSubmit={this.login} >
                  <input
                    type='email'
                    ref='email'
                    placeholder={`Email`}
                  />
                  <input
                    type='password'
                    ref='password'
                    placeholder={`Password`}
                  />
                  <input type='submit' style={{display: 'none'}}/>
                  <RequestButton
                    text={`login`}
                    disabled={disabled}
                    requestedItem={user}
                    onClick={this.login}
                  />
                </form>
                <p>Not signed up yet? Signup <a href={`signup`}>here</a></p>
                <RequestError errors={user.errors}/>
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

export default Login;
