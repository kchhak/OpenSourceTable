import * as APIReservationUtil from '../util/reservation_api_util';

export const RECEIVE_RESERVATION = 'RECEIVE_RESERVATION';
export const RECEIVE_RESERVATIONS = 'RECEIVE_RESERVATIONS';
export const DELETE_RESERVATION = 'DELETE_RESERVATION';
export const RECEIVE_RESERVATION_ERRORS = 'RECEIVE_RESERVATION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveReservation = reservation => ({
  type: RECEIVE_RESERVATION,
  reservation
});

const receiveReservations = reservations => ({
  type: RECEIVE_RESERVATIONS,
  reservations
});

const deleteReservation = reservation => ({
  type: DELETE_RESERVATION,
  reservation
});

const receiveReservationErrors = errors => ({
  type: RECEIVE_RESERVATION_ERRORS,
  errors
});


const clearReservationErrors = () => ({
  type: CLEAR_ERRORS
});

export const requestAllReservations = userId => dispatch => (
  APIReservationUtil.fetchAllReservations(userId)
    .then(reservations => dispatch(receiveReservations(reservations)))
);

export const requestReservation = id => dispatch => (
  APIReservationUtil.fetchReservation(id)
    .then(reservation => dispatch(receiveReservation(reservation)))
);

export const createReservation = reservation => dispatch => (
  APIReservationUtil.createReservation(reservation)
    .then(
      reservation => dispatch(receiveReservation(reservation)),
      errors => dispatch(receiveReservationErrors(errors))  
    )
);

export const cancelReservation = id => dispatch => (
  APIReservationUtil.deleteReservation(id)
    .then(reservation => dispatch(deleteReservation(reservation)))
);

export const clearErrors = () => dispatch => (
  dispatch(clearReservationErrors())
);