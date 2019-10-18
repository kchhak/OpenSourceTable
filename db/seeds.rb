# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.delete_all
Location.delete_all
Restaurant.delete_all
Review.delete_all

u = User.create(first_name: 'Demo', last_name: 'User', email: 'guest@email.com', password: 'guestpass', location: 'Charlotte', owner: true)
u2 = User.create(first_name: 'Test', last_name: 'Owner', email: 'res_owner@email.com', password: 'guestpass', location: 'Atlanta', owner: true)

atl = Location.create(name: 'Atlanta', lat: 33.747191, lng: -84.388844)
clt = Location.create(name: 'Charlotte', lat: 35.225156, lng: -80.845332)
ny = Location.create(name: 'New York', lat: 40.713389, lng: -73.991915)
sf = Location.create(name: 'San Francisco', lat: 37.772787, lng: -122.417552)

r1 = Restaurant.create(owner_id: u.id, name: 'Up Dog', address: '1212 Tasty Dog Drive', cuisine_type: 'American', dining_style: 'Casual Dining', phone: '123-123-1234', price: '$$', capacity: 50, 
                  description: "Up Dog started as a hole in the wall location that offered cheap, no frills hot dogs at every hour. Since its founding in 2016, Up Dog has come to enjoy immense success after being rated #1 Best Hot Dog Place With A Funny Name
                  by PunnyRestaurants Magazine. The venue is very down-tempo, honoring its grab and go roots. Indoor seating is still sparse, but the new location at 1212 Tasty Dog Drive has a large backyard-styled patio, where guests are welcome to have a hot dog,
                  have a brew, and make new friends and enemies over cornhole and various other outdoor activities.", location_id: clt.id)
r2 = Restaurant.create(owner_id: u2.id, name: 'Cheesy Chance', address: '3434 Gooey Cheese Court', cuisine_type: 'Italian', dining_style: 'Casual Elegant', phone: '333-333-3333', price: '$$$', capacity: 20,
                  description: 'Cheesy Chance is a gourmet cheesery, an experience unlike any other. Opened in the Fall of 2008, Cheesy Chance has a mission to bring cheese in all its available forms to everyone. The venue boasts an elegant location with 
                  minimalist design choices and rustic elements and features a robust menu including robust cheeses, milder cheeses, and an extensive wine list. A la carte options are available, but Cheesy Chance is known for its exquisitely crafted tasting menu
                  which delivers a global experience with a six-course cheese meal. Cheesiness is next to godliness, so why not give cheese a chance?', location_id: atl.id)
r3 = Restaurant.create(owner_id: u2.id, name: 'Pho-get About It', address: '5656 Broth Boulevard', cuisine_type: 'Asian', dining_style: 'Casual Dining', phone: '500-000-0009', price: '$$', capacity: 75,
                description: "Great Pho! Fresh salads featuring papaya, pork, prawns and chicken. Spring rolls both fresh and fried. Vietnamese style iced coffee and a full range of your favourite coffees - latte, flat white and so on. 
                Casual dining in our shady outdoor area or in the air-conditioned inside area. Please give us a try. We promise to be a delicious and memorable experience.", location_id: atl.id)
r4 = Restaurant.create(owner_id: u2.id, name: 'Stew-pendous', address: '5780 Broth Boulevard', cuisine_type: 'American', dining_style: 'Casual Dining', phone: '500-000-0913', price: '$$$', capacity: 100,
                description: "There is really no comfort food greater than a nice warm stew. Stew-pendous specializes in food that makes you want to melt in your chair and call your mom and tell her how lucky you are to have her in your life. We have a rotating
                menu of various hot picker-uppers, such as Homemade Chili, Chicken and Dumplings, and our locally reknowned Brunswick Stew. Not a soup fan? We also feature entrees that will still get your cozy going, such as our Skillet Mac and our slow baked
                casseroles, topped with heaps of cheese and tons of love.", location_id: clt.id)
r5 = Restaurant.create(owner_id: u2.id, name: 'Cake and Barrel', address: '2491 Antoinette Avenue', cuisine_type: 'Desserts', dining_style: 'Casual Elegant', phone: '523-333-3337', price: '$$$$', capacity: 10,
                description: "Cake and Barrel offers elegance and frivolousness, paired with a wonderfully rustic quirk. We do not have a cake menu, as we believe that the best creations are what our incredible chefs are inspired to make. We do, however, offer a 
                very large selection of both wines and whiskies that our experts have specially curated to pair with both our rich and dainty flavors. Our Premiere VIP Experience, offers relaxation, tranquility, and pure indulgence. Call today to find out more!", location_id: clt.id)
                
file1 = File.open('app/assets/images/hotdog.jpg')
file2 = File.open('app/assets/images/cheese.jpg')
file3 = File.open('app/assets/images/pho.jpg')
file4 = File.open('app/assets/images/soup.jpg')
file5 = File.open('app/assets/images/cake.jpg')

r1.photos.attach(io: file1, filename: 'hotdog.jpg')
r2.photos.attach(io: file2, filename: 'cheese.jpg')
r3.photos.attach(io: file3, filename: 'pho.jpg')
r4.photos.attach(io: file4, filename: 'soup.jpg')
r5.photos.attach(io: file5, filename: 'cake.jpg')

v1 = Review.create(author_id: u2.id, restaurant_id: r1.id, food: 5, ambience: 5, service: 3, value: 5,
                  comment: "Up Dog is way more than just a place to eat. It's weird to say, but this hot dog place is THE HOTTEST social spot
                  in the area. Food still feels freshly grilled and fun, but the location is definitely where it's at. Pricier than it used to be,
                  but you're paying for a quality spot for family, friends, and fun.")

v2 = Review.create(author_id: u2.id, restaurant_id: r1.id, food: 2, ambience: 3, service: 2, value: 1,
                  comment: "Really cool place but more of a gimmick than it's worth. I miss Joe being on the staff to keep things in check. These new
                  guys have gone crazy with all the other crap and forgotten what it means to be a hot dog place.")
                
v3 = Review.create(author_id: u2.id, restaurant_id: r1.id, food: 3, ambience: 4, service: 4, value: 2,
                  comment: "I'm not paying 12 bucks for a hot dog. Okay I will. But I'll be pretty mad about it. Cool music and amenities, but I
                  just want to be able to eat a hot dog without breaking the bank.")   

v4 = Review.create(author_id: u2.id, restaurant_id: r1.id, food: 3, ambience: 3, service: 3, value: 3,
                  comment: "What's Up Dog? Average all around. I'd say I was disappointed but it's a hot dog place. Who is really expecting much?")   

v5 = Review.create(author_id: u2.id, restaurant_id: r1.id, food: 5, ambience: 5, service: 5, value: 5,
                  comment: "We love Up Dog! Can't wait for the summer block party!!!!!!!!!")

v6 = Review.create(author_id: u2.id, restaurant_id: r2.id, food: 3, ambience: 3, service: 5, value: 1,
        comment: "Cheesy Chance is so expensive. What the heck???? It's just cheese!")

v7 = Review.create(author_id: u2.id, restaurant_id: r2.id, food: 5, ambience: 4, service: 5, value: 5,
        comment: "What an amazing restaurant. You couldn't be a regular at this place, but wow! Once in a lifetime. Where else
        could I experience so many different kinds of cheese without even having to stand up?")

v8 = Review.create(author_id: u2.id, restaurant_id: r2.id, food: 5, ambience: 1, service: 3, value: 1,
        comment: "A gourmet cheeserie that is *Casual* Elegant? I think not. Food is delectable, as to be expected, but perhaps
        Cheesy Chance should consider a more selective dress code if it aims to be an upscale cheeserie.")

v9 = Review.create(author_id: u2.id, restaurant_id: r3.id, food: 3, ambience: 2, service: 2, value: 2,
                  comment: "Poor service. Silverware felt grimy. Wish I knew how to use chopsticks because at least those get thrown
                  out after use. Food was okay.")   

v10 = Review.create(author_id: u2.id, restaurant_id: r3.id, food: 4, ambience: 3, service: 3, value: 4,
                  comment: "Pretty good pho. I'd go back if I was in the area and hungry for pho but not really a place that I'd make plans
                  to go to.")   

v11 = Review.create(author_id: u2.id, restaurant_id: r3.id, food: 1, ambience: 2, service: 5, value: 1,
                  comment: "Place smelled WEIRD. I asked for no onions in my soup and guess what I got? Onions. Waiter was very nice, but
                  that's about the only good thing I have to say about it.")


