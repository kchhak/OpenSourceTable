import {connect} from 'react-redux';

import ReservationForm from './reservation_form';
import {createReservation} from '../../actions/reservation_actions';

const mapStateToProps = ({errors, session}) => ({
  errors: errors.reservation,
  userId: session.id
});

const mapDispatchToProps = dispatch => ({
  createReservation: reservation => dispatch(createReservation(reservation))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReservationForm);