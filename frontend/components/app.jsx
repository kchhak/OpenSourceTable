import React from 'react';
import Modal from './modal/modal';
import { Route } from 'react-router-dom';

import NavBarContainer from './nav/nav_bar_container';
import RestaurantIndexContainer from './restaurants/restaurant_index_container';
import RestaurantDetailContainer from './restaurants/restaurant_detail_container';
import UserContainer from './user/user_container';
import Home from './home';
import PersonalLinks from './personalLinks';

const App = () => (
  <div>
    < Modal />
    <header>
      < NavBarContainer />
    </header>
    <Route exact path="/"
      component={Home}/>
    <Route exact path="/" 
      component={RestaurantIndexContainer}/>
    <Route exact path ="/users/:userId"
      component={UserContainer}/>
    <Route exact path="/restaurants/:restaurantId"
      component={RestaurantDetailContainer}
      />
    <Route path="/" component={PersonalLinks}/>
  </div>
);

export default App;