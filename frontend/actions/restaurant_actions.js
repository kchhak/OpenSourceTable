import * as APIRestaurantUtil from '../util/restaurant_api_util';

export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';
export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';
export const RECEIVE_RESTAURANT_ERRORS = 'RECEIVE_RESTAURANT_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS'

const receiveRestaurant = restaurant => ({
  type: RECEIVE_RESTAURANT,
  restaurant
});

const receiveRestaurants = restaurants => ({
  type: RECEIVE_RESTAURANTS,
  restaurants
})

const receiveRestaurantErrors = (errors) => ({
  type: RECEIVE_RESTAURANT_ERRORS,
  errors
})

const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const requestAllRestaurants = () => dispatch => (
  APIRestaurantUtil.fetchAllRestaurants()
    .then(restaurants => dispatch(receiveRestaurants(restaurants)))
);

export const requestRestaurant = id => dispatch => (
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