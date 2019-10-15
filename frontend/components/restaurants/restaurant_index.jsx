import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';

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
      </div>
    )
  }
}

export default RestaurantIndex;