import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form onSubmit={ (event) => {
        event.preventDefault();
        this.props.login(this.refs.email.value, this.refs.password.value);
      }} >
        <input type='email' ref='email' />
        <input type='password' ref='password'/>
        <input type='submit' value='Login' />
      </form>
    );
  }
}

export default Login;
