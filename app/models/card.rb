class Card < ApplicationRecord
  belongs_to :list
  has_many :comments
  has_many :actions
  
  def board_id
    list.board_id
  end

  def attributes
    super.merge board_id: board_id, 
      comments: comments, 
      comments_count: comments_count,
      actions: actions
  end

  def comments_count
    comments.size
  end
end
