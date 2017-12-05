Rails.application.routes.draw do
  root 'welcomes#index'

  resources :users
end
