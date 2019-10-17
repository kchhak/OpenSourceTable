import { connect } from 'react-redux';
import { createReview } from '../../actions/review_actions';
import { closeModal } from '../../actions/modal_actions';
import ReviewForm from './review_form';

const mapStateToProps = ({ errors, session }) => ({
  errors: errors.review,
  userId: session.id
});

const mapDispatchToProps = dispatch => ({
  createReview: review => dispatch(createReview(review)),
  closeModal: () => dispatch(closeModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);