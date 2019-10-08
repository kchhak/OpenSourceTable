import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signup, login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  submitUser: (user) => dispatch(signup(user)),
  loginUser: (user) => dispatch(login(user)),
  openModal: () => dispatch(openModal('login')),
  closeModal: () => dispatch(closeModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);