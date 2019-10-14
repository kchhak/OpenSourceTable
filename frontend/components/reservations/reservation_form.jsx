import React from 'react';

class ReservationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user_id: this.props.userId,
      restaurant_id: this.props.restaurant.id,
      num_guests: 1,
      res_time: new Date()
    };

    console.log(this.state);

    this.date = null;
    this.time = null;

    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value })
  }

  updateSearch(field){

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
          <label>Date
            <input type="date" onChange={this.updateSearch('date')}/>
          </label>
          <label>Time
            <input type="time" onChange={this.updateSearch('time')}/>
          </label>
          <button className="find-table">Find a Table</button>
        </form>
      </div>
    )
  }
}

export default ReservationForm;
