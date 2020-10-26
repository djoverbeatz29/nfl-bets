Rails.application.routes.draw do
  resources :picks
  resources :players
  resources :games
  resources :teams
  post '/auth', to: 'auth#create'
  get '/current_user', to: 'auth#show'

end