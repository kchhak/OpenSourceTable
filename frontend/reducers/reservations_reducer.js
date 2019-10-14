import { RECEIVE_RESERVATION, RECEIVE_RESERVATIONS } from '../actions/reservation_actions';
import merge from 'lodash/merge';

const reservationsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_RESERVATION:
      return Object.assign({}, state, { [action.reservation.id]: action.reservation})
    case RECEIVE_RESERVATIONS:
      return merge({}, action.reservations);
    default:
      return state;
  }
};

export default reservationsReducer;