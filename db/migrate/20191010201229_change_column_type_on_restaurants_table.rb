class ChangeColumnTypeOnRestaurantsTable < ActiveRecord::Migration[5.2]
  def change
    change_column :restaurants, :price, :string
  end
end
