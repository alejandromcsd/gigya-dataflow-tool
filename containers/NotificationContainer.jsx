import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Snackbar from 'material-ui/Snackbar';
import { statePartition } from '../reducers/notification';
import { notifyCompleted } from '../actions/notify';


const NotificationContainer = ({ message, onClose }) => (
  <div>
    <Snackbar
      open={message !== ''}
      message={message}
      autoHideDuration={4000}
      onRequestClose={onClose}
    />
  </div>
);

NotificationContainer.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    message: state[statePartition.partition][statePartition.message],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClose: () => dispatch(notifyCompleted()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationContainer);
