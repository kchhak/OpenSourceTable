class Restaurant < ApplicationRecord
  validates :name, :address, :cuisine_type, :dining_style, :phone, :price, :capacity, :desciption,
    presence: true

  belongs_to :owner, 
    class_name: "user"

end
