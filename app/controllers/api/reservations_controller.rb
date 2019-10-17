class Api::ReservationsController < ApplicationController
  def show 
    @reservation = Reservation.find(params[:id])
  end

  def index 
    @user = User.find(params[:user_id])

    if @user 
      @reservations = @user.reservations
    else
      render json: ["User not found"], status: 404
    end
  end

  def create
    params[:reservation][:res_time] = DateTime.strptime(params[:reservation][:res_time], '%Y-%m-%d %I:%M %p')
    @reservation = Reservation.new(reservation_params)

    if @reservation.save 
      render :show
    else
      render json: @reservation.errors.full_messages, status: 422
    end
  end

  def update 
    @reservation = Reservation.find(params[:user_id])

    if @reservation.update(reservation_params)
      render :show
    else
      render json: @reservation.errors.full_messages, status: 422
    end
  end


  def destroy   
    reservation = Reservation.find(params[:id])
    reservation.destroy
    render json: {}
  end

  private

  def reservation_params
    params.require(:reservation).permit(:user_id, :restaurant_id, :num_guests, :res_time)
  end

end