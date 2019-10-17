import { connect } from 'react-redux';
import ReservationForm from './reservation_form';
import { createReservation } from '../../actions/reservation_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = ({errors, session}) => ({
  errors: errors.reservation,
  userId: session.id
});

const mapDispatchToProps = dispatch => ({
  createReservation: reservation => dispatch(createReservation(reservation)),
  openModal: () => dispatch(openModal('login'))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReservationForm);