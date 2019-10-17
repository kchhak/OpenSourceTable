import React from 'react';

function formatDate(date) {
  return (
    `${date.getUTCMonth() + 1}/${date.getUTCDate()}/${date.getUTCFullYear()} at ${(date.getUTCHours() + 11) % 12 + 1}:${date.getUTCMinutes() === 0 ? "00" : "30"} ${date.getUTCHours() >= 12 ? "PM" : "AM"}`
  )
}

const UpcomingReservations = ({reservations}) => (
  reservations.map(reservation =>
    <ul className="reservation-block" key={reservation.id}>
      <li>{reservation.restaurant.name}</li>
      <li>{formatDate(new Date(reservation.res_time))}</li>
      <li>Table for {reservation.num_guests}</li>
      <hr />
    </ul>
  )
);

export default UpcomingReservations;