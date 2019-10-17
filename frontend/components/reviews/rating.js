import React from 'react';

function avgRating(review) {
  const avg = (review.food + review.ambience + review.service + review.value) / 4;
  let stars = [];
  let filled = 0;

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

  return stars;
}

const Rating = ({review}) => (
  <p className='stars'>{avgRating(review)}</p>
);

export default Rating;