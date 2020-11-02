class Pick < ApplicationRecord
  belongs_to :game
  belongs_to :player
  belongs_to :team

  def pick_result
    case @result
    when 1
      "Win"
    when 0
      "Loss"
    when 0.5
      "Push"
    end
end
