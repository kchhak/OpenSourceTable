import { RECEIVE_RESTAURANT, RECEIVE_RESTAURANTS } from '../actions/restaurant_actions';
import merge from 'lodash/merge';

const restaurantsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESTAURANT:
      return Object.assign({}, state, { [action.restaurant.id]: action.restaurant });
    case RECEIVE_RESTAURANTS:
      return merge({}, action.restaurants);
    default:
      return state;
  }
};

export default restaurantsReducer;