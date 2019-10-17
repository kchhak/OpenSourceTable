import * as APIReviewUtil from '../util/review_api_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const DELETE_REVIEW = 'DELETE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});

const removeReview = review => ({
  type: DELETE_REVIEW,
  review
});

const receiveReviewErrors = errors => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
});


const clearReviewErrors = () => ({
  type: CLEAR_ERRORS
});

export const requestAllReviews = resId => dispatch => (
  APIReviewUtil.fetchAllReviews(resId)
    .then(reviews => dispatch(receiveReviews(reviews)))
);

export const requestReview = id => dispatch => (
  APIReviewUtil.fetchReview(id)
    .then(review => dispatch(receiveReview(review)))
);

export const createReview = review => dispatch => (
  APIReviewUtil.createReview(review)
    .then(
      review => dispatch(receiveReview(review)),
      errors => dispatch(receiveReviewErrors(errors))
    )
);

export const deleteReview = id => dispatch => (
  APIReviewUtil.deleteReview(id)
    .then(review => dispatch(removeReview(review)))
);

export const clearErrors = () => dispatch => (
  dispatch(clearReviewErrors())
);