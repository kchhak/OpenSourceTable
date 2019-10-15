json.extract! reservation, :id, :user_id, :restaurant_id, :num_guests, :res_time

json.restaurant do
  json.partial! 'api/restaurants/restaurant', restaurant: reservation.restaurant
end