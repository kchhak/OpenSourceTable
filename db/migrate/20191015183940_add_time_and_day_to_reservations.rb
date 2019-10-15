class AddTimeAndDayToReservations < ActiveRecord::Migration[5.2]
  def change
    remove_column :reservations, :res_time
    add_column :reservations, :day, :date
    add_column :reservations, :time, :time
  end
end
