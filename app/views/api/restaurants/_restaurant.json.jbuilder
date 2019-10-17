json.extract! restaurant, :id, :name, :address, :phone, :cuisine_type, :dining_style, :description, :price

json.photoUrls restaurant.photos.map {|file| url_for(file)}