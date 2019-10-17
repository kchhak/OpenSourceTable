import { connect } from 'react-redux';
import { requestAllReviews } from '../../actions/review_actions';
import ReviewIndex from './review_index';

const mapStateToProps = state => ({
  reviews: Object.values(state.entities.reviews)
})

const mapDispatchToProps = dispatch => ({
  requestAllReviews: (resId) => dispatch(requestAllReviews(resId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex);