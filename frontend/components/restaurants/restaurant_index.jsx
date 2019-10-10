import React from 'react';
import RestaurantIndexItem from './restaurant_detail';
import { Route } from 'react-router-dom';
import RestaurantDetailContainer from './restaurant_detail_container';

class RestaurantIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllRestaurants();
  }

  render () {
    const restaurants = this.props.restaurants;

    return(
      <div className="restaurant-list">
        <ul>
          {restaurants.map(restaurant => (
            <RestaurantIndexItem 
              key={restaurant.id}
              restaurant={restaurant}
            />
          ))}
        </ul>
        <Route 
          path="/restaurants/:restaurantId"
          component={RestaurantDetailContainer}
        />
      </div>
    )
  }
}

export default RestaurantIndex;