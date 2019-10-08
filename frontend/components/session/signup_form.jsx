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
      location: '',
      owner: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginGuest = this.loginGuest.bind(this);
    this.toggleOwner = this.toggleOwner.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitUser(this.state).then(this.props.closeModal);
  }

  loginGuest() {
    this.props.loginUser({
      email: 'guest@email.com',
      password: 'guestpass'
    });
    this.props.closeModal();
  }

  toggleOwner() {
    this.setState({ owner: !this.state.owner});z
  }

  renderErrors(){
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

  render() {
    // const errors = this.props.errors ? this.props.errors.session.join('. ') : "";

    return (
      <div className="session-form">
        <h2>Welcome to OpensourceTable!</h2>
        <hr/>
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.first_name} placeholder="First Name *" onChange={this.update('first_name')}/>
          <input type="text" value={this.state.last_name} placeholder="Last Name *" onChange={this.update('last_name')} />
          <input type="text" value={this.state.email} placeholder="Enter email *" onChange={this.update('email')} />
          <input type="password" value={this.state.password} placeholder="Enter password *" onChange={this.update('password')} />
          {/* {RE ENTER PASSWORD} */}
          <input type="text" value={this.state.location} placeholder="Primary Dining Location" onChange={this.update('location')}/>
          <input className="owner" type="checkbox" onChange={this.toggleOwner}/>I am a restaurant owner<br/>
          <button>Create Account</button>
        </form>
        <hr/>
        <p>Don't want to complete the form?</p>
        <button onClick={this.loginGuest}>Continue as a Guest</button>
        <p>Already have an account? <a onClick={this.props.openModal}>Sign in</a></p>
      </div>
    )
  }
}

export default SignupForm;