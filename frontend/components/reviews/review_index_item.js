import React from 'react';
import Rating from './rating';

const ReviewIndexItem = ({review}) => (
  <li className="review-index-item">
    <Rating review={review}/>

    <div className="rating-details">
      <span>Food</span> <span className="rating-num">{review.food}</span> <span> &middot; </span>
      <span>Ambience</span> <span className="rating-num">{review.ambience}</span> <span> &middot; </span>
      <span>Service</span> <span className="rating-num">{review.service}</span> <span> &middot; </span>
      <span>Value</span> <span className="rating-num">{review.value}</span>
    </div>
    <p className="comment">{review.comment}</p>
  </li>
);

export default ReviewIndexItem;