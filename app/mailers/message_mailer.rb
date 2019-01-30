class MessageMailer < ApplicationMailer
require 'mailgun-ruby'
require 'mailgun'
  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.message_mailer.contact_me.subject
  #
  def contact_me(message)
    # @greeting = "Hi"
    @body = message.body

    mg_client = Mailgun::Client.new ENV['mailgun_secret_api_key']
    message_params = {:from => message.email,
                      :to => ENV['email'],
                      :subject => 'Question du site',
                      :text => message.body}
    mg_client.send_message ENV['mailgun_domain'], message_params


    # mail to: "moneyness@hotmail.fr", from: message.email
  end
end
