class Action < ApplicationRecord
  belongs_to :card
  validates :description, presence: true
end
