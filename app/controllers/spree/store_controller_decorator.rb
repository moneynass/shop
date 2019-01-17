# frozen_string_literal: true

class Spree::StoreController
  before_action :load_taxonomies

  def load_taxonomies
    @taxonomies = Spree::Taxonomy.includes(root: :children)
  end
end
