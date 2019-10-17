export const createFavorite = favorite => (
  $.ajax({
    method: 'POST',
    url: `api/restaurants/${favorite.restaurant_id}/favorites`,
    data: {favorite}
  })
)

export const deleteFavorite = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/favorites/${id}`
  })
)
