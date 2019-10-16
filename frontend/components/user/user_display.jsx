import React from 'react';

class UserDisplay extends React.Component {
  constructor(props){
    super(props);
    this.upcoming = [];
    this.past = [];

    this.sortReservations = this.sortReservations.bind(this);
  }

  componentDidMount(){
    this.props.requestAllReservations(this.props.currentUser.id);
    this.sortReservations();
  }

  formatDate(date) {
    return (
      `${ date.getUTCMonth() + 1 }/${date.getUTCDate()}/${ date.getUTCFullYear() } at ${(date.getUTCHours() + 11) % 12 + 1 }:${date.getUTCMinutes() === 0 ? "00" : "30"} ${ date.getUTCHours() >= 12 ? "PM" : "AM" }`
    )
  }

  sortReservations() {
    this.props.reservations.forEach(reservation => {
      let d = new Date(reservation.res_time);

      if (d.valueOf() < Date.now().valueOf()){
        this.past.push(reservation)
      } else {
        this.upcoming.push(reservation)
      }
    });
  }

  renderUpcomingReservations() {
    if (!this.upcoming) {
      return (
        <p> No Upcoming Reservations 
          <a href="#">Book a Table.</a>
        </p>
      )
    }

    return (
      this.upcoming.map(reservation =>
        <ul className="reservation-block" key={reservation.id}>
          <li>{reservation.restaurant.name}</li>
          <li>{this.formatDate(new Date(reservation.res_time))}</li>
          <li>Table for {reservation.num_guests}</li>
        </ul>
      )
    )
  }

  renderPastReservations() {
    if (!this.props.reservations) {
      return null;
    }

    return (
      this.past.map(reservation => {
        let date = new Date(reservation.res_time)

        return(
          <ul className="reservation-block" key={reservation.id}>
            <li>{reservation.restaurant.name}</li>
            <li>{date.getUTCMonth() + 1}/{date.getUTCDate()}/{date.getUTCFullYear()} at {(date.getUTCHours() + 11) % 12 + 1}:{date.getUTCMinutes() === 0 ? "00" : "30"} {date.getUTCHours >= 12 ? "PM" : "AM"}</li>
            <li>Table for {reservation.num_guests}</li>
          </ul>
        )
      })
    )
  }

  render (){
    const user = this.props.currentUser;
    const restForm = user.owner ? <li>Submit your Restaurant</li> : ""

    return(
      <div className="user-show">
        <div className="user-bar">
          <h2>{user.first_name} {user.last_name}</h2>
        </div>

        <div className="user-info">
          <ul className="user-show-nav">
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#restaurants">Saved Restaurants</a></li>
            {restForm}
          </ul>

          <div className="res-res">
            <div className="upcoming-reservations">
              <a id="reservations"></a>
              <h2>Upcoming Reservations</h2>
              {this.renderUpcomingReservations()}
            </div>

            <div className="past-reservations">
              <h2>Past Reservations</h2>
              {this.renderPastReservations()}
            </div>

            <div className="saved-restaurants">
              <a id="restaurants"></a>
              <h2>Saved Restaurants</h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserDisplay;