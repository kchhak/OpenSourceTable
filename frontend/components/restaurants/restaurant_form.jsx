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
  }
}