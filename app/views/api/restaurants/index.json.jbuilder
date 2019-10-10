@restaurants.each do |restaurant|
  restaurant.set! restaurant.id do
    json.partial! 'api/restaurants/restaurant', restaurant: restaurant
  end
end