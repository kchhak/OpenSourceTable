export const fetchReservation = id => (
  $.ajax({
    method: 'GET',
    url: `/api/reservations/${id}`
  })
);

export const fetchAllReservations = userId => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/reservations`
  })
);

export const createReservation = reservation => (
  $.ajax({
    method: 'POST',
    url: `/api/restaurants/${reservation.restaurant_id}/reservations`,
    data: {reservation}
  })
);

export const updateReservation = reservation => (
  $.ajax({
    method: 'PATCH',
    url: `/api/reservations/${id}`,
    data: {reservation}
  })
);

export const deleteReservation = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/reservations/${id}`
  })
)