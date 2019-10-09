import { RECEIVE_RESTAURANT_ERRORS, CLEAR_ERRORS } from '../actions/restaurant_actions';

const restaurantErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESTAURANT_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
}

export default restaurantErrorsReducer;