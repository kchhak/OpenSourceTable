import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';

const RestaurantIndex = ({ restaurants }) => (
  <ul className="restaurant-list">
    {restaurants.map(restaurant => (
      <RestaurantIndexItem 
        restaurant={restaurant}
        key={restaurant.id}
      />
    ))}
  </ul>
);

export default RestaurantIndex;