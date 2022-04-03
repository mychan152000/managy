class AddTimestampsToCards < ActiveRecord::Migration[6.0]
  def change
  	add_timestamps(:cards)
  end
end
