import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantIndexItem = ({ restaurant }) => (
  <Link to = {`/restaurants/${restaurant.id}`}>
    <li className="restaurant-index-item">
      <img className="restaurant-thumb" src={restaurant.photoUrls[0]}/>
      
      <div>
        <h3>{restaurant.name}</h3>
        <p className="res-address">{restaurant.address}</p>
        <span><i className="fas fa-money-bill"></i> {restaurant.price} </span>
        <span><i className="fas fa-utensils"></i> {restaurant.cuisine_type}</span>
      </div>
      
    </li>
  </Link>
);

export default RestaurantIndexItem;