import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RepositoryPanel from '../components/Repository/RepositoryPanel';
import { statePartition as repositoryPartition } from '../reducers/repository';
import { statePartition as menuPartition } from '../reducers/menu';
import { addScript } from '../actions/dataflow';
import TABS from '../constants/Tabs';

const RepositoryContainer = ({ isOpen, onAddScript }) => (
  <div>
    <RepositoryPanel
      open={isOpen}
      onAddScript={onAddScript}
    />
  </div>
);

RepositoryContainer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onAddScript: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const tab = state[menuPartition.partition][menuPartition.activeTab];

  return {
    isOpen: tab === TABS.CODE
      ? false
      : state[repositoryPartition.partition][repositoryPartition.isOpen],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAddScript: template => dispatch(addScript(template)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryContainer);
