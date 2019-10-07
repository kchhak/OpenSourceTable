class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :location, null: false
      t.boolean :owner, default: false

      t.timestamps
    end
    
    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true
  end
end
