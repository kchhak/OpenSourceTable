import React from 'react';
import {withRouter} from 'react-router-dom';

class RestaurantForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      owner_id: this.props.currentUser.id,
      location_id: '',
      address: '',
      cuisine_type: '',
      dining_style: '',
      phone: '',
      price: '',
      capacity: '',
      description: '',
      mon_open: null,
      mon_close: null,
      tues_open: null,
      tues_close: null,
      wed_open: null,
      wed_close: null,
      thurs_open: null,
      thurs_close: null,
      fri_open: null,
      fri_close: null,
      sat_open: null,
      sat_close: null,
      sun_open: null,
      sun_close: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createRestaurant(this.state)
      .then(restaurant => this.props.history.push(`/restaurants/${restaurant.id}`))
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    })
  }

  renderErrors() {
    return (
      <ul className="errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="restaurant-form">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.name} placeholder="Name" onChange={this.update('name')} />
          <input type="text" value={this.state.address} placeholder="Address" onChange={this.update('address')} />
         
         <div className="phone-number">
          <label for="phone">Enter the phone number</label>

          <input type="tel" id="phone" name="phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required/>

            <small>Format: 123-456-7890</small>
          </div>

          <input type="text" value={this.state.description} placeholder="Name" onChange={this.update('name')} />
          
          <select value={this.state.location} onChange={this.update('location')} defaultValue="Select a general location">
            <option value="Atlanta">Atlanta</option>
            <option value="Charlotte">Charlotte</option>
            <option value="New York">New York</option>
            <option value="San Francisco">San Francisco</option>
          </select>

          <select value={this.state.cuisine_type} onChange={this.update('cuisine_type')} defaultValue="Select a cuisine type">
            <option value="American">American</option>
            <option value="Asian">Asian</option>
            <option value="Fusion/Eclectic">Fusion/Eclectic</option>
            <option value="Italian">Italian</option>
            <option value="Mexican">Mexican</option>
            <option value="Seafood">Seafood</option>
            <option value="Steakhouse">Steakhouse</option>
          </select>

          <select value={this.state.cuisine_type} onChange={this.update('cuisine_type')} defaultValue="Select a dining style">
            <option value="Casual Dining">Casual Dining</option>
            <option value="Casual Elegant">Casual Elegant</option>
            <option value="Fine Dining">Fine Dining</option>
          </select>

          <div className="select-price">
            <p>Select a price</p>
            <input type="radio" id="1" name="price" value="$$" onChange={this.update('price')}/>
              <label htmlFor="1">$30 and under</label>
            <input type="radio" id="2" name="price" value="$$$" onChange={this.update('price')}/>
              <label htmlFor="2">$31 to $50</label>
            <input type="radio" id="3" name="price" value="$$$$" onChange={this.update('price')}/>
              <label htmlFor="3">$50 and over</label>  
          </div>

          <input type="number" value={this.state.capacity} placeholder="Capacity" onChange={this.update('capacity')}/>
          
          <div className="select-hours">
            <p>Hours of Operation</p>

            <div className="mon-hours">
              <input type="checkbox" name="mon" id="mon"/>
                <label htmlFor="mon">Monday</label>

              <div class="reveal-if-active">
                <input type="time" name="mon-open" id="mon-open" value={this.state.mon_open} onChange={this.update('mon_open')}/>
                <label htmlFor="mon-open">Open</label>
              </div>

              <div class="reveal-if-active">
                <input type="time" name="mon-close" id="mon-close" value={this.state.mon_close} onChange={this.update('mon_close')} />
                <label htmlFor="mon-close">Close</label>
              </div>
            </div>

            <div className="tues-hours">
              <input type="checkbox" name="tues" id="tues" />
              <label htmlFor="tues">Tuesday</label>

              <div class="reveal-if-active">
                <input type="time" name="tues-open" id="tues-open" value={this.state.tues_open} onChange={this.update('tues_open')} />
                <label htmlFor="tues-open">Open</label>
              </div>

              <div class="reveal-if-active">
                <input type="time" name="tues-close" id="tues-close" value={this.state.tues_close} onChange={this.update('tues_close')} />
                <label htmlFor="tues-close">Close</label>
              </div>
            </div>

            <div className="wed-hours">
              <input type="checkbox" name="wed" id="wed" />
              <label htmlFor="wed">Wednesday</label>

              <div class="reveal-if-active">
                <input type="time" name="wed-open" id="wed-open" value={this.state.wed_open} onChange={this.update('wed_open')} />
                <label htmlFor="wed-open">Open</label>
              </div>

              <div class="reveal-if-active">
                <input type="time" name="wed-close" id="wed-close" value={this.state.wed_close} onChange={this.update('wed_close')} />
                <label htmlFor="wed-close">Close</label>
              </div>
            </div>

            <div className="thurs-hours">
              <input type="checkbox" name="thurs" id="thurs" />
              <label htmlFor="thurs">Thursday</label>

              <div class="reveal-if-active">
                <input type="time" name="thurs-open" id="thurs-open" value={this.state.thurs_open} onChange={this.update('thurs_open')} />
                <label htmlFor="thurs-open">Open</label>
              </div>

              <div class="reveal-if-active">
                <input type="time" name="thurs-close" id="thurs-close" value={this.state.thurs_close} onChange={this.update('thurs_close')} />
                <label htmlFor="thurs-close">Close</label>
              </div>
            </div>

            <div className="fri-hours">
              <input type="checkbox" name="fri" id="fri" />
              <label htmlFor="fri">Friday</label>

              <div class="reveal-if-active">
                <input type="time" name="fri-open" id="fri-open" value={this.state.fri_open} onChange={this.update('fri_open')} />
                <label htmlFor="fri-open">Open</label>
              </div>

              <div class="reveal-if-active">
                <input type="time" name="fri-close" id="fri-close" value={this.state.fri_close} onChange={this.update('fri_close')} />
                <label htmlFor="fri-close">Close</label>
              </div>
            </div>

            <div className="sat-hours">
              <input type="checkbox" name="sat" id="sat" />
              <label htmlFor="sat">Saturday</label>

              <div class="reveal-if-active">
                <input type="time" name="sat-open" id="sat-open" value={this.state.sat_open} onChange={this.update('sat_open')} />
                <label htmlFor="sat-open">Open</label>
              </div>

              <div class="reveal-if-active">
                <input type="time" name="sat-close" id="sat-close" value={this.state.sat_close} onChange={this.update('sat_close')} />
                <label htmlFor="sat-close">Close</label>
              </div>
            </div>

            <div className="sun-hours">
              <input type="checkbox" name="sun" id="sun" />
              <label htmlFor="sun">Sunday</label>

              <div class="reveal-if-active">
                <input type="time" name="sun-open" id="sun-open" value={this.state.sun_open} onChange={this.update('sun_open')} />
                <label htmlFor="sun-open">Open</label>
              </div>

              <div class="reveal-if-active">
                <input type="time" name="sun-close" id="sun-close" value={this.state.sun_close} onChange={this.update('sun_close')} />
                <label htmlFor="sun-close">Close</label>
              </div>
            </div>
          </div>

          <button>Submit</button>
        </form>
      </div>
    )
  }
};

export default withRouter(RestaurantForm);
