import { connect } from 'react-redux';

import RestaurantForm from './restaurant_form';
import { createRestaurant } from '../../actions/restaurant_actions';

const mapStateToProps = ({ errors, session, entities: {users} }) => ({
  errors: errors.restaurant,
  currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
  createRestaurant: restaurant => dispatch(createRestaurant(restaurant)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantForm);