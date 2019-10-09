class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.integer :owner_id, null: false
      t.string :name, null: false
      t.string :address, null: false
      t.string :cuisine_type, null: false
      t.string :dining_style, null: false
      t.string :phone, null: false
      t.integer :price, null: false
      t.integer :capacity, null: false
      t.text :description, null: false
      t.time :mon_open
      t.time :mon_close
      t.time :tues_open
      t.time :tues_close
      t.time :wed_open
      t.time :wed_close
      t.time :thurs_open
      t.time :thurs_close
      t.time :fri_open
      t.time :fri_close
      t.time :sat_open
      t.time :sat_close
      t.time :sun_open
      t.time :sun_close

      t.timestamps
    end

    add_index :restaurants, :owner_id
    add_index :restaurants, :name
    add_index :restaurants, :cuisine_type
  end
end
