class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.float :spread
      t.integer :home_score
      t.integer :away_score
      t.integer :week
      t.datetime :start_time
      t.references :home_team, null: false
      t.references :away_team, null: false

      t.timestamps
    end

    add_foreign_key :games, :teams, column: :home_team_id
    add_foreign_key :games, :teams, column: :away_team_id
  end
end