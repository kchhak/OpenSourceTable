class Api::RestaurantsController < ApplicationController
  def show 
    @restaurant = Restaurant.find(params[:id])
  end

  def index 
    @restaurants = Restaurant.all
  end

  def create 
    @restaurant = Restaurant.new(restaurant_params)

    if @restaurant.save 
      render :show
    else
      render json: @restaurant.errors.full_messages, status: 422
    end
  end

  def update
    @restaurant = Restaurant.find(params[:id])
    
    if @restaurant.update(restaurant_params)
      render :show 
    else
      render json: @restaurant.errors.full_messages, status: 422
    end
  end

  private 

  def restaurant_params 
    params.require(:restaurant)
      .permit(:owner_id, :name, :address, :location, :cuisine_type, :dining_style, :phone, :price, :capacity, :description,
              :mon_open, :mon_close, :tues_open, :tues_close, :wed_open, :wed_close, :thurs_open, :thurs_close,
              :fri_open, :fri_close, :sat_open, :sat_close, :sun_open, :sun_close)
  end

end