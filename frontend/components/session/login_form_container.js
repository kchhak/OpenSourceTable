import { connect } from 'react-redux';
import LoginForm from './login_form';
import {login} from '../../actions/session_actions';
import {openModal, closeModal} from '../../actions/modal_actions';

const mapStateToProps = state => ({
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  submitUser: (user) => dispatch(login(user)),
  openModal: () => dispatch(openModal('signup')),
  closeModal: () => dispatch(closeModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);