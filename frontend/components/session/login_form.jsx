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
  }

  update(field) {
    return e => this.setState({[field]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitUser(this.state);
  }

  render () {
    return (
      <div className="session-form">
        <h2>Please sign in</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.email} placeholder="Email" onChange={this.update('email')}/>
          <input type="password" value={this.state.password} placeholder="Password" onChange={this.update('password')} />
          <button>Sign In</button>
        </form>
        New to OpenTable? <Link to="/signup">Create an account</Link>
      </div>
    )
  }
}

export default LoginForm;