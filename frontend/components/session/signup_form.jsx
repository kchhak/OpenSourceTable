import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      location: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitUser(this.state);
  }

  render() {
    return (
      <div className="session-form">
        <h2>Welcome to OpensourceTable!</h2>
        <form onSubmit={this.handleSubmit}>
          {/* FIRST NAME
          LAST NAME */}
          <input type="text" value={this.state.first_name} placeholder="First Name *" onChange={this.update('first_name')}/>
          <input type="text" value={this.state.last_name} placeholder="Last Name *" onChange={this.update('last_name')} />
          <input type="text" value={this.state.email} placeholder="Enter email *" onChange={this.update('email')} />
          <input type="password" value={this.state.password} placeholder="Enter password *" onChange={this.update('password')} />
          {/* {RE ENTER PASSWORD} */}
          <input type="text" value={this.state.location} placeholder="Primary Dining Location" onChange={this.update('location')}/>
          <button>Create Account</button>
        </form>
        Already have an account? <Link to="/login">Sign in</Link>
      </div>
    )
  }
}

export default SignupForm;