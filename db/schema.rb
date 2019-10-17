# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_10_17_225122) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "favorites", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "restaurant_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "restaurant_id"], name: "index_favorites_on_user_id_and_restaurant_id", unique: true
  end

  create_table "locations", force: :cascade do |t|
    t.string "name", null: false
    t.float "lat", null: false
    t.float "lng", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_locations_on_name"
  end

  create_table "reservations", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "restaurant_id", null: false
    t.integer "num_guests", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "res_time"
    t.index ["restaurant_id"], name: "index_reservations_on_restaurant_id"
    t.index ["user_id"], name: "index_reservations_on_user_id"
  end

  create_table "restaurants", force: :cascade do |t|
    t.integer "owner_id", null: false
    t.integer "location_id", null: false
    t.string "name", null: false
    t.string "address", null: false
    t.string "cuisine_type", null: false
    t.string "dining_style", null: false
    t.string "phone", null: false
    t.string "price", null: false
    t.integer "capacity", null: false
    t.text "description", null: false
    t.time "mon_open"
    t.time "mon_close"
    t.time "tues_open"
    t.time "tues_close"
    t.time "wed_open"
    t.time "wed_close"
    t.time "thurs_open"
    t.time "thurs_close"
    t.time "fri_open"
    t.time "fri_close"
    t.time "sat_open"
    t.time "sat_close"
    t.time "sun_open"
    t.time "sun_close"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["cuisine_type"], name: "index_restaurants_on_cuisine_type"
    t.index ["location_id"], name: "index_restaurants_on_location_id"
    t.index ["name"], name: "index_restaurants_on_name"
    t.index ["owner_id"], name: "index_restaurants_on_owner_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "author_id", null: false
    t.integer "restaurant_id", null: false
    t.integer "food", null: false
    t.integer "ambience", null: false
    t.integer "service", null: false
    t.integer "value", null: false
    t.text "comment", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_reviews_on_author_id"
    t.index ["restaurant_id"], name: "index_reviews_on_restaurant_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "location", null: false
    t.boolean "owner", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
