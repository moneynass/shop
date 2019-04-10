# This migration comes from solidus_customer_images (originally 20181029080947)
class AddDescriptionToCustomerImages < ActiveRecord::Migration[5.2]
  def change
    add_column :spree_customer_images, :description, :text
  end
end
