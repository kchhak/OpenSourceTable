import React from 'react';
import { withRouter } from 'react-router-dom';

class ReservationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user_id: this.props.userId,
      restaurant_id: this.props.restaurant.id,
      num_guests: 1,
      res_time: null
    };

    this.date = null;
    this.time = null;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    let reservation = Object.assign({}, this.state);
    reservation.res_time = `${this.date} ${this.time}`;

    this.props.createReservation(reservation)
      .then(() => this.props.history.push(`/users/${this.props.userId}`))
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value })
  }

  updateDate() {
    return e => {
      this.date = e.target.value;
    } 
  }

  updateTime() {
    return e => {
      this.time = e.target.value;
    } 
  }

  partySizeDropdown() {
    let party = [];

    for (let i = 3; i <= 20; i++) {
      party.push(i);
    }

    return party.map(num => (
      <option key={num} value={num}>
        {"For " + num}
      </option>
    ));
  }

  timeDropdown() {
    let times = ['12:00 AM', '12:30 AM'];

    for (let i = 1; i <= 11; i++) {
      if (i < 10){
        times.push(`0${i}:00 AM`);
        times.push(`0${i}:30 AM`);
      } else {
        times.push(`${i}:00 AM`);
        times.push(`${i}:30 AM`);
      }
    }

    times.push('12:00 PM');
    times.push('12:30 PM');

    for (let i = 1; i <= 11; i++) {
      if (i < 10) {
        times.push(`0${i}:00 PM`);
        times.push(`0${i}:30 PM`);
      } else {
        times.push(`${i}:00 PM`);
        times.push(`${i}:30 PM`);
      }
    }

    return times.map(time => (
      <option key={time} value={time}>
        {time}
      </option>
    ))
  }

  render() {
    return (
      <div className="reservation-form">
        <h2>Make a reservation</h2>
        <hr />

        <form onSubmit={this.handleSubmit}>
          <label>Party Size
            <select className="party-size" onChange={this.update('num_guests')}>
              <option key='1' value='1'>For 1</option>
              <option key='2' value='2' defaultValue="selected">For 2</option>
              {this.partySizeDropdown()}
            </select>
          </label>

          <div className="date-time">
            <div className="date">
              <label>Date
                <br/>
                <input type="date" onChange={this.updateDate()}/>
              </label>
            </div>

            <div className="time">
              <label>Time
                <br />
                <select onChange={this.updateTime()}>
                  {this.timeDropdown()}
                </select>
              </label>
            </div>
          </div>

          <button className="find-table">Find a Table</button>
        </form>
      </div>
    )
  }
}

export default withRouter(ReservationForm);
