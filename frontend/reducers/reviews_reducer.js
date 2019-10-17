import { RECEIVE_REVIEW, RECEIVE_REVIEWS, DELETE_REVIEW } from '../actions/review_actions';
import merge from 'lodash/merge';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_REVIEW:
      return Object.assign({}, state, { [action.review.id]: action.review })
    case RECEIVE_REVIEWS:
      return merge({}, action.reviews);
    case DELETE_REVIEW:
      let newState = Object.assign({}, oldState);
      delete newState[action.review.id];
      return newState;
    default:
      return state;
  }
};

export default reviewsReducer;