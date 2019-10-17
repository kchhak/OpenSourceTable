import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantIndexItem = ({ restaurant }) => (
  <Link to = {`/restaurants/${restaurant.id}`}>
    <li className="restaurant-index-item">
      <img className="restaurant-thumb" src={restaurant.photoUrls[0]}/>
      
      <div>
        <h3>{restaurant.name}</h3>
        <p>{restaurant.numReviews}</p>
        {/* avgrating num-reviews */}
        <p>{restaurant.cuisine_type}</p>
        <p>{restaurant.price}</p>  
      </div>
      
    </li>
  </Link>
);

export default RestaurantIndexItem;