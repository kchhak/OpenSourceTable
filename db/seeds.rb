# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Location.delete_all
Restaurant.delete_all

u = User.create(first_name: 'Demo', last_name: 'User', email: 'guest@email.com', password: 'guestpass', location: 'Charlotte', owner: true)
u2 = User.create(first_name: 'Test', last_name: 'Owner', email: 'res_owner@email.com', password: 'guestpass', location: 'Atlanta', owner: true)

atl = Location.create(name: 'Atlanta', lat: 33.747191, lng: -84.388844)
clt = Location.create(name: 'Charlotte', lat: 35.225156, lng: -80.845332)
ny = Location.create(name: 'New York', lat: 40.713389, lng: -73.991915)
sf = Location.create(name: 'San Francisco', lat: 37.772787, lng: -122.417552)

Restaurant.create(owner_id: u.id, name: 'Up Dog', address: '1212 Tasty Dog Drive', cuisine_type: 'American', dining_style: 'Casual Dining', phone: '1231231234', price: '$$', capacity: 50, description: 'Up Dog: a variety of hot dogs', location_id: clt.id)
Restaurant.create(owner_id: u2.id, name: 'Cheesy Chance', address: '3434 Gooey Cheese Court', cuisine_type: 'Italian', dining_style: 'Casual Elegant', phone: '3333333333', price: '$$$', capacity: 20,
                  description: 'Cheesiness is next to godliness. Experience the best of gourmet gooeyness at Cheesy Chance.', location_id: atl.id)

