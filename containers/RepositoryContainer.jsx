import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RepositoryPanel from '../components/RepositoryPanel';
import { statePartition } from '../reducers/repository';

const RepositoryContainer = ({ isOpen }) => (
  <div>
    <RepositoryPanel open={isOpen} />
  </div>
);

RepositoryContainer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    isOpen: state[statePartition.partition][statePartition.isOpen],
  };
}

export default connect(mapStateToProps)(RepositoryContainer);
