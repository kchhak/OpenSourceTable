import React from 'react';


class RestaurantDetail extends React.Component {
  componentDidMount() {
    this.props.requestRestaurant(this.props.match.params.restaurantId);
  }

  render() {
    const restaurant = this.props.restaurant;

    return(
      <div className="restaurant-show">
        <div className="restaurant-info">
          <span>{restaurant.cuisine_type}</span>
          <span>{restaurant.dining_style}</span>
        </div>
        <h1>{restaurant.name}</h1>
        <p>{restaurant.description}</p>
      </div>
    )
  }

}

export default RestaurantDetail;