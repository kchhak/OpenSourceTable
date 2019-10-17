class Restaurant < ApplicationRecord
  validates :name, :address, :cuisine_type, :dining_style, :phone, :price, :capacity, :description,
    presence: true

  belongs_to :owner, 
    class_name: "User"

  has_many :reservations,
   foreign_key: "restaurant_id"

   has_many :reviews,
    foreign_key: "restaurant_id"
end
