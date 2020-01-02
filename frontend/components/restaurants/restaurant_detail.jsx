import React from 'react';
import ReservationFormContainer from '../reservations/reservation_form_container';
import ReviewIndexContainer from '../reviews/review_index_container';

class RestaurantDetail extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.requestRestaurant(this.props.match.params.restaurantId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.restaurantId !== this.props.match.params.restaurantId) {
      this.props.requestRestaurant(this.props.match.params.restaurantId);
    }
  }

  toggleFavorite(){
    let favorite = {
      user_id: this.props.userId,
      restaurant_id: this.props.restaurant_id
    }
    
    this.props.createFavorite(favorite)
  }

  render() {
    const restaurant = this.props.restaurant;

    if (!restaurant){
      return null;
    }

    
    let displayPrice;

    switch (restaurant.price){
      case '$$':
        displayPrice = "$30 and under";
      case '$$$':
        displayPrice = "$31 to $50";
      case '$$$$':
        displayPrice = "$50 and over";
    }

    return(
      <div className="restaurant-page">
        <img className="photo-header" src={restaurant.photoUrls[0]} />
        <div className="restaurant-detail">
          <div className="restaurant-main-info">
            <h1>{restaurant.name}</h1>
            <hr />
            {/* <span><i className="far fa-comment-alt"></i> Reviews </span> */}
            <span><i className="fas fa-money-bill"></i> {displayPrice} </span>
            <span><i className="fas fa-utensils"></i> {restaurant.cuisine_type}</span>
            <p>{restaurant.description}</p>
            <ReviewIndexContainer restaurantId={restaurant.id} />
          </div>
          <div className="restaurant-side-info">
            <ReservationFormContainer restaurant={restaurant} />
            <ul>
              <li><i className="fas fa-map-marker-alt"></i> <span>{restaurant.address}</span></li>
              <li><i className="fas fa-utensils"></i> <span>{restaurant.cuisine_type}</span></li>
              <li><i className="fas fa-concierge-bell"></i> <span>{restaurant.dining_style}</span></li>
              <li><i className="fas fa-phone-alt"></i> <span>{restaurant.phone}</span></li>
            </ul>
          </div>

        </div>
      </div>

    )
  }

}

export default RestaurantDetail;