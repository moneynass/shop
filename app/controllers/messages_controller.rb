class MessagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:show, :create, :new]
  def new
    @message = Message.new
  end

   def create
    @message = Message.new(message_params)

    if @message.valid?
      MessageMailer.contact_me(@message).deliver_now
     # redirect_to new_message_url
     redirect_to 'Contact', "/contact"
      flash[:notice] = "Merci pour votre message!"

    else
      flash[:notice] = "Oops...une erreur est survenue. Veuillez reéssayer."
      redirect_to 'Contact', "/contact"
      #render :new
    end
    end

private

  def message_params
    params.require(:message).permit(:name, :email, :body)
  end
end
