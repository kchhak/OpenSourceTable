import {connect} from 'react-redux';
import {requestAllReservations, cancelReservation} from '../../actions/reservation_actions';

import UserDisplay from './user_display'

const mapStateToProps = ({ session, entities: { users, reservations } }) => ({
  currentUser: users[session.id],
  reservations: Object.values(reservations)
});

const mapDispatchToProps = dispatch => ({
  requestAllReservations: id => dispatch(requestAllReservations(id)),
  cancelReservation: resId => dispatch(cancelReservation(resId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDisplay)