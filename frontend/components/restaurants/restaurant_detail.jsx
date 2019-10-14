import React from 'react';

class RestaurantDetail extends React.Component {
  componentDidMount() {
    debugger
    this.props.requestRestaurant(this.props.match.params.restaurantId);
  }

  render() {
    const restaurant = this.props.restaurant;

    if (!restaurant){
      return null;
    }

    return(
      <div className="restaurant-detail">
        <div className="restaurant-quick-info">
          <span>{restaurant.cuisine_type} | </span>
          <span>{restaurant.dining_style}</span>
        </div>
        <h1>{restaurant.name}</h1>
        <p>{restaurant.description}</p>
      </div>
    )
  }

}

export default RestaurantDetail;