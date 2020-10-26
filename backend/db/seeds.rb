# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Team.create([
    {
        hometown: 'Miami',
        name: 'Dolphins',
        code: 'MIA'
    },
    {
        hometown: 'New England',
        name: 'Patriots',
        code: 'NE'
    },
    {
        hometown: 'Jacksonville',
        name: 'Jaguars',
        code: 'JAC'
    },
    {
        hometown: 'Las Vegas',
        name: 'Raiders',
        code: 'LV'
    },
    {
        hometown: 'Tennessee',
        name: 'Titans',
        code: 'TEN'
    },
    {
        hometown: 'Minnesota',
        name: 'Vikings',
        code: 'MIN'
    },
    {
        hometown: 'San Francisco',
        name: '49ers',
        code: 'SF'
    },
    {
        hometown: 'New York',
        name: 'Giants',
        code: 'NYG'
    },
    {
        hometown: 'Green Bay',
        name: 'Packers',
        code: 'GB',
    },
    {
        hometown: 'New Orleans',
        name: 'Saints',
        code: 'NO'
    },
    {
        hometown: 'Kansas City',
        name: 'Chiefs',
        code: 'KC'
    },
    {
        hometown: 'Baltimore',
        name: 'Ravens',
        code: 'BAL'
    }
])

Game.create([
  {
    away_team_id: Team.find_by(name: 'Dolphins').id,
    home_team_id: Team.find_by(name: 'Jaguars').id,
    spread: -3,
    start_time: DateTime.new(2020, 9, 24, 19, 30),
    week: 3
  },
  {
    away_team_id: Team.find_by(name: 'Raiders').id,
    home_team_id: Team.find_by(name: 'Patriots').id,
    spread: -7,
    start_time: DateTime.new(2020, 9, 27, 12, 0),
    week: 3
  },
  {
    away_team_id: Team.find_by(name: 'Titans').id,
    home_team_id: Team.find_by(name: 'Vikings').id,
    spread: 2.5,
    start_time: DateTime.new(2020, 9, 27, 12, 0),
    week: 3
  },
  {
    away_team_id: Team.find_by(name: '49ers').id,
    home_team_id: Team.find_by(name: 'Giants').id,
    spread: 4.5,
    start_time: DateTime.new(2020, 9, 27, 16, 5),
    week: 3
  },
  {
    away_team_id: Team.find_by(name: 'Packers').id,
    home_team_id: Team.find_by(name: 'Saints').id,
    spread: -2.5,
    start_time: DateTime.new(2020, 9, 27, 19, 20),
    week: 3
  },
  {
    away_team_id: Team.find_by(name: 'Chiefs').id,
    home_team_id: Team.find_by(name: 'Ravens').id,
    spread: -3.5,
    start_time: DateTime.new(2020, 9, 28, 19, 15),
    week: 3
  }
])