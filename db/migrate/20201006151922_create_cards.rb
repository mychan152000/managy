class CreateCards < ActiveRecord::Migration[6.0]
  def change
    create_table :cards do |t|
      t.string :title, nil: false
      t.datetime :due_date
      t.string :labels, array: true, default: [], nil: false
      t.text :description, nil: false
      t.belongs_to :list
    end
  end
end
