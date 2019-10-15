class Reservation < ApplicationRecord
  validates :num_guests, :res_time, presence: true

  belongs_to :user
  belongs_to :restaurant

  
end
