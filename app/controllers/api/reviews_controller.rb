class Api::ReviewsController < ApplicationController
  def show 
    @review = Review.find(params[:id])
  end

  def index 
    @restaurant = Restaurant.find(params[:restaurant_id])

    if @restaurant 
      @reviews = @restaurant.reviews
    else
      render json: ["Restaurant not found"], status: 404
    end
  end

  def create 
    @review = Review.new(review_params)
    if @review.save 
      render :show
    else 
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy   
    review = Review.find(params[:id])
    review.destroy
    render json: {}
  end

  private 
  def review_params
    params.require(:review).permit(:author_id, :restaurant_id, :food, :ambience,
      :service, :value, :comment)
  end
end