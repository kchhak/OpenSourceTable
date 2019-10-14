class Api::ReservationsController < ApplicationController
  def show 
    @reservation = Reservation.find(params[:id])
  end

  def index 
    @user = User.find(params[:userId])

    if @user 
      @reservations = @user.reservations
    else
      render json: ["User not found"], status: 404
    end
  end

  def create 
    @reservation = Reservation.new(reservation_params)

    if @reservation.save 
      render :show
    else
      render json: @reservation.errors.full_messages, status: 422
    end
  end

  def update 
    @reservation = Reservation.find(params[:userId])

    if @reservation.update(reservation_params)
      render :show
    else
      render json: @reservation.errors.full_messages, status: 422
    end
  end

  private

  def reservation_params
    params.require(:reservation).permit(:user_id, :restaurant_id, :num_guests, :res_time)
  end

end