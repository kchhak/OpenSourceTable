import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantIndexItem = ({ restaurant }) => (
  <li className="restaurant-index-item">
    <Link to={`/restaurants/${restaurant.id}`}>
      <h3>{restaurant.name}</h3>
      {/* avgrating num-reviews */}
      <p>{restaurant.cuisine_type}</p>
      <span className="dot"/>
      <p>{restaurant.price}</p>
      <span className="dot" />
      {/* <p>{restaurant.location.name}</p> */}
    </Link>
  </li>
);

export default RestaurantIndexItem;