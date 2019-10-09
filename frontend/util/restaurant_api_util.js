export const fetchRestaurant = id => (
  $.ajax({
    method: 'GET',
    url: `/api/restaurants/${id}`
  })
);

export const createRestaurant = restaurant => (
  $.ajax({
    method: 'POST',
    url: 'api/restaurants',
    data: {restaurant}
  })
);

export const updateRestaurant = restaurant => (
  $.ajax({
    method: 'PATCH',
    url: `api/restaurants/${restaurant.id}`,
    data: {restaurant}
  })
);