json.restaurant do
  json.partial! 'api/restaurants/restaurant', restaurant: favorite.restaurant
end