import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
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
        <h2>Please sign in</h2>
        <form onSubmit={this.handleSubmit}>
          {/* FIRST NAME
          LAST NAME */}
          <input type="text" value={this.state.email} placeholder="Email" onChange={this.update('email')} />
          <input type="password" value={this.state.password} placeholder="Password" onChange={this.update('password')} />
          {/* {RE ENTER PASSWORD}
          {DROPDOWN FOR LOCATION} */}
          <button>Create Account</button>
        </form>
        Already have an account? <Link to="/login">Sign in</Link>
      </div>
    )
  }
}

export default SignupForm;