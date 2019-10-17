Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create] do 
      resources :reservations, only: [:index]
    end

    resource :session, only: [:create, :destroy]

    resources :restaurants, only: [:index, :show, :create, :update] do 
      resources :reservations, only: [:create]
      resources :reviews, only: [:index, :create]
      resources :favorites, only: [:create]
    end
    
    resources :reservations, only: [:show, :update, :destroy]
    resources :reviews, only: [:update, :destroy]
    resources :favorites, only: [:destroy]
  end
end
