class AddIndexToLocationIdOnRestaurantsTable < ActiveRecord::Migration[5.2]
  def change
    add_index :restaurants, :location_id
  end
end
