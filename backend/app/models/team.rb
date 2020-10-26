class Team < ApplicationRecord

    def team_name
        "#{@location} #{@name}"
    end

end
