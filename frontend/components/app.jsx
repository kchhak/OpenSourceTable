import React from 'react';
import {AuthRoute} from '../util/route_util';
import Modal from './modal/modal';
import NavBarContainer from './nav/nav_bar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

const App = () => (
  <div>
    <Modal />
    <header>
      <NavBarContainer />
    </header>
    {/* <AuthRoute path="/login" component={LoginFormContainer}/>
    <AuthRoute path="/signup" component={SignupFormContainer}/> */}
  </div>
);

export default App;