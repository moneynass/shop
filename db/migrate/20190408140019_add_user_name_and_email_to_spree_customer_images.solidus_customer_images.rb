# This migration comes from solidus_customer_images (originally 20181025155433)
class AddUserNameAndEmailToSpreeCustomerImages < ActiveRecord::Migration[5.2]
  def change
    add_column :spree_customer_images, :user_name, :string
    add_column :spree_customer_images, :email, :string
  end
end
