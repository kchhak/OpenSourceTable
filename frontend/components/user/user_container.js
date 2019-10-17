import {connect} from 'react-redux';
import {requestAllReservations} from '../../actions/reservation_actions';
import { openModal } from '../../actions/modal_actions';

import UserDisplay from './user_display'

const mapStateToProps = ({ session, entities: { users, reservations } }) => ({
  currentUser: users[session.id],
  reservations: Object.values(reservations)
});

const mapDispatchToProps = dispatch => ({
  requestAllReservations: id => dispatch(requestAllReservations(id)),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDisplay)