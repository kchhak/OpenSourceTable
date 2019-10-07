import React from 'react';
import {Route} from 'react-router-dom';
import NavBarContainer from './nav/nav_bar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

const App = () => (
  <div>
    <header>
      <h1>OpensourceTable</h1>
      <NavBarContainer/>
    </header>
    <Route path="/login" component={LoginFormContainer}/>
    <Route path="/signup" component={SignupFormContainer}/>
  </div>
);

export default App;