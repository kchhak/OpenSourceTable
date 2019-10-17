import React from 'react';
import ReviewFormContainer from '../reviews/review_form_container';
import { HashLink as Link } from 'react-router-hash-link';

class UserDisplay extends React.Component {
  constructor(props){
    super(props);
    this.upcoming = [];
    this.past = [];

    this.sortReservations = this.sortReservations.bind(this);
  }

  componentDidMount(){
    this.props.requestAllReservations(this.props.currentUser.id);
  }

  formatDate(date) {
    return (
      `${ date.getUTCMonth() + 1 }/${date.getUTCDate()}/${ date.getUTCFullYear() } at ${(date.getUTCHours() + 11) % 12 + 1 }:${date.getUTCMinutes() === 0 ? "00" : "30"} ${ date.getUTCHours() >= 12 ? "PM" : "AM" }`
    )
  }

  sortReservations() {
    this.upcoming = [];
    this.past = [];

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
    if (this.upcoming.length === 0) {
      return (
        <div className="no-upcoming"> 
          <p>No Upcoming Reservations</p>
          <br/>
          <a href="#">Book a Table Now!</a>
        </div>
      )
    }

    return (
      this.upcoming.map(reservation =>
        <ul className="reservation-block" key={reservation.id}>
          <div className="reservation-info">
            <img className="restaurant-thumb-small" src={reservation.restaurant.photoUrls[0]}></img>          
            <div className="reservation-rest">
              <li className="restaurant-name">{reservation.restaurant.name}</li>
              <li>{this.formatDate(new Date(reservation.res_time))}</li>
              <li>Table for {reservation.num_guests}</li>
              <button className="cancel-res" onClick={() => this.props.cancelReservation(reservation.id).then(window.location.reload())}>Cancel this reservation?</button>
            </div>
          </div>
          <hr />
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
            <div className="reservation-info">
              <img className="restaurant-thumb-small" src={reservation.restaurant.photoUrls[0]}></img>
              <div className= "reservation-rest">
                <li className="restaurant-name">{reservation.restaurant.name}</li>
                <li>{date.getUTCMonth() + 1}/{date.getUTCDate()}/{date.getUTCFullYear()} at {(date.getUTCHours() + 11) % 12 + 1}:{date.getUTCMinutes() === 0 ? "00" : "30"} {date.getUTCHours >= 12 ? "PM" : "AM"}</li>
                <li>Table for {reservation.num_guests}</li>
              </div>
            </div>
            <ReviewFormContainer restaurant_id={reservation.restaurant_id}/>
            <hr/>
          </ul>
        )
      })
    )
  }

  render (){
    const user = this.props.currentUser;
    const restForm = user.owner ? <li>Submit your Restaurant</li> : ""
    this.sortReservations();

    return(
      <div className="user-show">
        <div className="user-bar">
          <h2>{user.first_name} {user.last_name}</h2>
        </div>

        <div className="user-info">
          <ul className="user-show-nav">
            <li><Link smooth to="#reservations">Upcoming Reservations</Link></li>
            <li><Link smooth to="#dining-history">Dining History</Link></li>
            {/* {restForm} */}
          </ul>

          <div className="res-res">
            <div className="upcoming-reservations">
              <a id="reservations"></a>
              <h2>Upcoming Reservations</h2>
              {this.renderUpcomingReservations()}
            </div>

            <div className="past-reservations">
              <h2 id="dining-history">Past Reservations</h2>
              {this.renderPastReservations()}
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default UserDisplay;