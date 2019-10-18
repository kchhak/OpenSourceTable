# OpenSourceTable

![ost-logo](https://github.com/kchhak/opensourceTable/blob/master/app/assets/images/logo.png?raw=true)

[Live Demo](https://opensource-table.herokuapp.com/#/)

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
* Reservations can be made from the restaurant show page and has options for party-size from 1-20, as well as a date picker, and time dropdown.

Working with date and time with reservations was particularly difficult, because the format that the database is looking for on a `datetime` object is not very user friendly. Additionally, there are not many options available for customizing inputs so I ended up creating my own with the use of a for loop. In order to mimic Open Table's reservation form, I created separate inputs for date and time and then merged the data in the `handleSubmit(e)` of my `ReservationForm` and converted it in my controller.

```
  params[:reservation][:res_time] = DateTime.strptime(params[:reservation][:res_time], '%Y-%m-%d %I:%M %p')
  @reservation = Reservation.new(reservation_params)
```

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

I also created a util method `formatDate()` which parsed my datetime object into more easily understandable information:

```
  formatDate(date) {
    return (
      `${ date.getUTCMonth() + 1 }/${date.getUTCDate()}/${ date.getUTCFullYear() } at 
      ${(date.getUTCHours() + 11) % 12 + 1 }:${date.getUTCMinutes() === 0 ? "00" : "30"} ${ date.getUTCHours() >= 12 ? "PM" : "AM" }`
    )
  }
```

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