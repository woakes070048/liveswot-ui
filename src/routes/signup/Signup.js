import React from 'react';

class Signup extends React.Component {
  render() {
    return (
      <form onSubmit={ (event) => {
        event.preventDefault();
        this.props.signup(
          this.refs.email.value,
          this.refs.username.value,
          this.refs.password.value);
      }} >
        <input type='email' ref='email' />
        <input type='text' ref='username'/>
        <input type='password' ref='password'/>
        <input type='submit' value='Signup' />
      </form>
    );
  }
}

export default Signup;
