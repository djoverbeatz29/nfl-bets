class Player < ApplicationRecord
    def money_won
        @picks.inject(0) { |sum, pick| sum + pick.money}
    end

    def ror
        self.money_won / @picks.filter{ |pick| pick.result != 0.5}.length
    end
    
end