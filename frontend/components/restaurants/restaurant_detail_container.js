import { connect } from 'react-redux';
import {requestRestaurant} from '../../actions/restaurant_actions';
import {createFavorite} from '../../actions/favorites_actions';
import RestaurantDetail from './restaurant_detail';


const mapStateToProps = (state, ownProps) => ({
  restaurant: state.entities.restaurants[ownProps.match.params.restaurantId]
});

const mapDispatchToProps = dispatch => ({
  requestRestaurant: id => dispatch(requestRestaurant(id)),
  createFavorite: favorite => dispatch(createFavorite(favorite))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantDetail);