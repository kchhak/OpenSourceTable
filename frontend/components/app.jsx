import React from 'react';
import {AuthRoute} from '../util/route_util';
import NavBarContainer from './nav/nav_bar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

const App = () => (
  <div>
    <header>
      <h1>OpensourceTable</h1>
      <NavBarContainer />
    </header>
    <AuthRoute path="/login" component={LoginFormContainer}/>
    <AuthRoute path="/signup" component={SignupFormContainer}/>
  </div>
);

export default App;