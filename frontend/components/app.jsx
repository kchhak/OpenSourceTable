import React from 'react';
import Modal from './modal/modal';
import { Route } from 'react-router-dom';

import NavBarContainer from './nav/nav_bar_container';
import RestaurantIndexContainer from './restaurants/restaurant_index_container';
import RestaurantDetailContainer from './restaurants/restaurant_detail_container';

const App = () => (
  <div>
    < Modal />
    <header>
      < NavBarContainer />
    </header>
    <Route exact path="/" component={RestaurantIndexContainer}/>
    <Route
      exact path="/restaurants/:restaurantId"
      component={RestaurantDetailContainer}
    />
  </div>
);

export default App;