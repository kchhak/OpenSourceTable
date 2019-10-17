import * as APIFavoritesUtil from '../util/favorites_api_util';

export const RECEIVE_FAVORITE = 'RECEIVE_FAVORITE';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';

const receiveFavorite = favorite => ({
  type: RECEIVE_FAVORITE,
  favorite
})

const deleteFavorite = favorite => ({
  type: DELETE_FAVORITE,
  favorite
})

export const createFavorite = favorite => dispatch => (
  APIFavoritesUtil.createFavorite(favorite)
    .then(favorite => dispatch(receiveFavorite(favorite)))
)

export const unFavorite = id => dispatch => (
  APIFavoritesUtil.deleteFavorite(id)
    .then(favorite => dispatch(deleteFavorite(favorite)))
)

