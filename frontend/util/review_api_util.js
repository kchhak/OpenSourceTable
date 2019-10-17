export const fetchReview = id => (
  $.ajax({
    method: 'GET',
    url: `/api/reviews/${id}`
  })
);

export const fetchAllReviews = resId => (
  $.ajax({
    method: 'GET',
    url: `/api/restaurants/${resId}/reviews`
  })
);

export const createReview = review => (
  $.ajax({
    method: 'POST',
    url: `/api/restaurants/${review.restaurant_id}/reviews`,
    data: { review }
  })
);

export const updateReview = review => (
  $.ajax({
    method: 'PATCH',
    url: `/api/reviews/${id}`,
    data: { review }
  })
);

export const deleteReview = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/reviews/${id}`
  })
)