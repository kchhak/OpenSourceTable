import { RECEIVE_FAVORITE, DELETE_FAVORITE } from '../actions/reservation_actions';

const favoritesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_FAVORITE:
      return Object.assign({}, state, { [action.favorite.id]: action.favorite })
    case DELETE_FAVORITE:
      let newState = Object.assign({}, state);
      delete newState[action.favorite.id];
      return newState;
    default:
      return state;
  }
};

export default favoritesReducer;