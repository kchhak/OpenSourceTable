import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginGuest = this.loginGuest.bind(this);
  }

  update(field) {
    return e => this.setState({[field]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitUser(this.state).success(this.props.closeModal());
  }

  loginGuest() {
    this.props.submitUser({
      email: 'guest@email.com',
      password: 'guestpass'
    });
    this.props.closeModal();
  }

  render () {
    return (
      <div className="session-form">
        <h2>Please sign in</h2>
        <hr/>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.email} placeholder="Email" onChange={this.update('email')}/>
          <input type="password" value={this.state.password} placeholder="Password" onChange={this.update('password')} />
          <button>Sign In</button>
        </form>
        <hr/>
        <p>Don't want to complete the form?</p>
        <button onClick={this.loginGuest}>Continue as a guest</button>
        <p>New to OpensourceTable? <a onClick={this.props.openModal}>Create an account</a></p>
      </div>
    )
  }
}

export default LoginForm;