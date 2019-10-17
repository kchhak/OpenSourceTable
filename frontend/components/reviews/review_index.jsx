import React from 'react';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllReviews(this.props.restaurantId)
  }

  render() {
    const reviews = this.props.reviews;

    if (!reviews){
      return null;
    }

    return (
      <div className="review-list">
        <h2> What People Are Saying </h2>
        <ul>
          {reviews.map(review => (
            <ReviewIndexItem
              key={review.id}
              review={review}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default ReviewIndex;