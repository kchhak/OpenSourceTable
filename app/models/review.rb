class Review < ApplicationRecord
  validates :food, :ambience, :service, :value, :comment, presence: true

  belongs_to :author, 
    class_name: "User"

  belongs_to :restaurant
end
