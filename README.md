# OpenSourceTable

[OpenSourceTable Live](https://opensource-table.herokuapp.com/#/)

OpenSourceTable is a single page web app based on OpenTable. It showcases restaurant listings with restaurant details and user reviews. OpenSourceTable allows users to create reservations and view them on their profile, along with a dining history of past reservations with the option to review the restaurants at which they have dined. 

***

## Features  

### Auth

* Website can be viewed without login, however reservations are auth-protected. Attempting to create a reservation while not signed in, will prompt users to log in via the sign in modal.
* Sign in and sign up modals contain links to each other.
* Nav bar features either a greeting message and user-nav, or sign in/sign up buttons depending on session state.
* Sign out redirects to home page.

![auth](https://github.com/kchhak/opensourceTable/blob/master/app/assets/images/user_auth.png?raw=true)


### Restaurants

* Restaurant listings have quick info, while show page contains a full restaurant description and user reviews.
* Ratings which are broken down into four categories: food, ambience, service, and value, are averaged into an overall score and presented with dynamic star ratings.

```
  for (let i = 0; i < Math.floor(avg); i++) {
    stars.push(<i className="fas fa-star"></i>)
    filled += 1;
  }

  if ((avg % 1) >= .50) {
    stars.push(<i className="fas fa-star-half-alt"></i>)
    filled += 1;
  }

  for (let i = 0; i < (5 - filled); i++) {
    stars.push(<i className="far fa-star"></i>)
  }
```

* Reservations can be made from the restaurant show page and has options for party-size from 1-20, as well as a date picker, and time dropdown.

![restaurant](https://github.com/kchhak/opensourceTable/blob/master/app/assets/images/restaurant.png?raw=true)


### Users 


* User nav on top navigation bar and sidebar nav on user show page redirect to specific elements with smooth scroll.
* User show page features reservations sorted into upcoming and past by comparing the reservation time and date to the current time.

```
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
```

* Past reservations include review form, allowing only users who have dined at a restaurant to leave reviews of it.

![user](https://github.com/kchhak/opensourceTable/blob/master/app/assets/images/user.png?raw=true)

***
## Technologies

OpenSourceTable is a full stack web app that was built with Ruby on Rails, React-Redux, and PostgreSQL

* Backend development with Ruby on Rails
* Rendering frontend components through React-Redux
* Database management through PostgreSQL
* ActiveStorage through AWS S3
* Hosted on Heroku
* Navigation to `#hash-fragment` with [ReactRouterHashLink](https://github.com/rafrex/react-router-hash-link)

***
## Future Directions

* Suggested reservations time slots on restaurant index, further validations based on business hours and restaurant capacity
* Restaurant tags, search bar and filter by features
* Interactive locations and implementation of Google Maps API