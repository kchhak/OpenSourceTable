import { connect } from 'react-redux';
import {requestRestaurant} from '../../actions/restaurant_actions';
import RestaurantIndexItem from './restaurant_detail';


const mapStateToProps = (state, ownProps) => ({
  restaurant: state.entities.restaurants[ownProps.match.params.restaurantId]
});

const mapDispatchToProps = dispatch => ({
  requestRestaurant: id => dispatch(requestRestaurant(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantIndexItem);