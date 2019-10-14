class Restaurant < ApplicationRecord
  validates :name, :address, :cuisine_type, :dining_style, :phone, :price, :capacity, :description,
    presence: true

  belongs_to :owner, 
    class_name: "User"

end
