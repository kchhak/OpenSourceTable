import React from 'react';
import Modal from './modal/modal';
import NavBarContainer from './nav/nav_bar_container';
import RestaurantIndexContainer from './restaurants/restaurant_index_container';

const App = () => (
  <div>
    < Modal />
    <header>
      < NavBarContainer />
    </header>
    <RestaurantIndexContainer/>
  </div>
);

export default App;