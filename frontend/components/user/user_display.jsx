import React from 'react';

class UserDisplay extends React.Component {
  componentDidMount(){
    this.props.requestAllReservations(this.props.currentUser.id);
  }

  renderReservations() {
    if (!this.props.reservations) {
      return null;
    }

    return(
      this.props.reservations.map(reservation =>
        <ul className="reservation-block" key={reservation.id}>
          <li>{reservation.restaurant.name}</li>
          <li>{new Date(reservation.res_time).toUTCString()}</li>
          <li>Party of {reservation.num_guests}</li>
        </ul>
      )
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
              {this.renderReservations()}
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