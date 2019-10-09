import * as APIRestaurantUtil from '../util/restaurant_api_util';

export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';
export const RECEIVE_RESTAURANT_ERRORS = 'RECEIVE_RESTAURANT_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS'

const receiveRestaurant = restaurant => ({
  type: RECEIVE_RESTAURANT,
  restaurant
});

const receiveRestaurantErrors = (errors) => ({
  type: RECEIVE_RESTAURANT_ERRORS,
  errors
})

const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const fetchRestaurant = id => dispatch => (
  APIRestaurantUtil.fetchRestaurant(id)
    .then(
      restaurant => dispatch(receiveRestaurant(restaurant))
    )
);

export const createRestaurant = restaurant => dispatch => (
  APIRestaurantUtil.createRestaurant(restaurant)
    .then(
      restaurant => dispatch(receiveRestaurant(restaurant)),
      errors => dispatch(receiveRestaurantErrors(errors))
    )
);

export const clearErrors = () => dispatch => (
  dispatch(clearErrors())
);