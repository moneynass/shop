require 'uri'

class Message
   include ActiveModel::Model
   attr_accessor :name, :email, :body
   validates :name, presence: true
   validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }
   # validates :email, presence: true, format: { with: Devise.email_regexp, message: "invalid email" }
   validates :body, presence: true
end
