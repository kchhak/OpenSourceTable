class User < ApplicationRecord
  validates :first_name, :last_name, :email, :password_digest, :session_token, :location, presence: true
  validates :email, uniqueness: true
  validates :owner, inclusion: {in: [true, false]}
  validates :password, length: {minimum: 6, allow_nil: true}

  after_initialize :ensure_session_token

  has_many :restaurants, 
    foreign_key: "owner_id"
  
  has_many :reservations,
    foreign_key: "user_id"

  attr_reader :password

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return user if user && user.is_password?(password)
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  private
  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end
