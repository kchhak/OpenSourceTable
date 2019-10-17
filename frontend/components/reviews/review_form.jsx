import React from 'react';
import {withRouter} from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      author_id: this.props.userId,
      restaurant_id: this.props.restaurant_id,
      food: null,
      ambience: null,
      service: null,
      value: null,
      comment: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createReview(this.state)
      .then(this.props.history.push(`/restaurants/${this.state.restaurant_id}`));
  }

  update(field) {
    return e => this.setState({[field]: e.target.value})
  }

  render() {
    return (
      <div className='review-form-container'>
        <h2>Enjoy your meal? Let us know!</h2>
        <form className='review-form' onSubmit={this.handleSubmit}>
          <div className="rating">
            <label htmlFor="food-rating">Food</label>
            <input type="radio" name="food-rating" value="1" onChange={this.update('food')} /> <span>1</span> 
            <input type="radio" name="food-rating" value="2" onChange={this.update('food')} /> <span>2</span> 
            <input type="radio" name="food-rating" value="3" onChange={this.update('food')} /> <span>3</span>
            <input type="radio" name="food-rating" value="4" onChange={this.update('food')} /> <span>4</span>
            <input type="radio" name="food-rating" value="5" onChange={this.update('food')} /> <span>5</span>
          </div>

          <div className="rating">
            <label htmlFor="ambience-rating">Ambience</label>
            <input type="radio" name="ambience-rating" value="1" onChange={this.update('ambience')} /> <span>1</span>
            <input type="radio" name="ambience-rating" value="2" onChange={this.update('ambience')} /> <span>2</span>
            <input type="radio" name="ambience-rating" value="3" onChange={this.update('ambience')} /> <span>3</span>
            <input type="radio" name="ambience-rating" value="4" onChange={this.update('ambience')} /> <span>4</span>
            <input type="radio" name="ambience-rating" value="5" onChange={this.update('ambience')} /> <span>5</span>
          </div>

          <div className="rating">
            <label htmlFor="service-rating">Service</label>
            <input type="radio" name="service-rating" value="1" onChange={this.update('service')} /> <span>1</span>
            <input type="radio" name="service-rating" value="2" onChange={this.update('service')} /> <span>2</span>
            <input type="radio" name="service-rating" value="3" onChange={this.update('service')} /> <span>3</span>
            <input type="radio" name="service-rating" value="4" onChange={this.update('service')} /> <span>4</span>
            <input type="radio" name="service-rating" value="5" onChange={this.update('service')} /> <span>5</span>
          </div>

          <div className="rating">
            <label htmlFor="value-rating">Value</label>
            <input type="radio" name="value-rating" value="1" onChange={this.update('value')} /> <span>1</span>
            <input type="radio" name="value-rating" value="2" onChange={this.update('value')} /> <span>2</span>
            <input type="radio" name="value-rating" value="3" onChange={this.update('value')} /> <span>3</span>
            <input type="radio" name="value-rating" value="4" onChange={this.update('value')} /> <span>4</span>
            <input type="radio" name="value-rating" value="5" onChange={this.update('value')} /> <span>5</span>
          </div>

          <textarea cols="50" rows="6" placeholder="Leave a Review" onChange={this.update('comment')}></textarea>
          <br/>
          <button>Submit</button>
        </form>
      </div>
    )
  }

}

export default withRouter(ReviewForm);
