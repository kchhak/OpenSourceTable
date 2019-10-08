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
    this.props.submitUser(this.state).then(this.props.closeModal);
  }

  loginGuest() {
    this.props.submitUser({
      email: 'guest@email.com',
      password: 'guestpass'
    });
    this.props.closeModal();
  }

  renderErrors() {
    return (
      <ul className="errors">
        {this.props.errors.session.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render () {
    return (
      <div className="session-form">
        <h2>Please sign in</h2>
        <hr/>
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.email} placeholder="Email" onChange={this.update('email')}/>
          <input type="password" value={this.state.password} placeholder="Password" onChange={this.update('password')} />
          <button>Sign In</button>
        </form>
        <hr/>
        <p>Don't want to complete the form?</p>
        <button onClick={this.loginGuest}>Continue as a Guest</button>
        <p>New to OpensourceTable? <a onClick={this.props.openModal}>Create an account</a></p>
      </div>
    )
  }
}

export default LoginForm;