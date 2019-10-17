import { RECEIVE_RESERVATION, RECEIVE_RESERVATIONS, DELETE_RESERVATION } from '../actions/reservation_actions';
import merge from 'lodash/merge';

const reservationsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_RESERVATION:
      return Object.assign({}, state, { [action.reservation.id]: action.reservation})
    case RECEIVE_RESERVATIONS:
      return merge({}, action.reservations);
    case DELETE_RESERVATION:
      let newState = Object.assign({}, oldState);
      delete newState[action.reservation.id];
      return newState;
    default:
      return state;
  }
};

export default reservationsReducer;