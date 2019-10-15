class ChangeTimeColumnsOnReservation < ActiveRecord::Migration[5.2]
  def change
    remove_column :reservations, :day
    remove_column :reservations, :time
    add_column :reservations, :res_time, :datetime
  end
end
