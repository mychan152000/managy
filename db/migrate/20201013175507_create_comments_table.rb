class CreateCommentsTable < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.string :text
      t.belongs_to :card
      t.timestamps
    end
  end
end
