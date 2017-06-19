import React from 'react';
import { connect } from 'react-redux';
import { showCode } from '../actions/menu';
import { notify } from '../actions/notify';
import { update } from '../actions/dataflow';
import { statePartition as menuPartition } from '../reducers/menu';
import { statePartition as dataflowPartition } from '../reducers/dataflow';
import SourceView from '../components/SourceView';
import TABS from '../constants/Tabs';

const SourceViewContainer = props => <SourceView {...props} />;

function mapStateToProps(state) {
  const activeTab = state[menuPartition.partition][menuPartition.activeTab];
  return {
    show: activeTab === TABS.CODE,
    activeTab,
    parsedCode: state[dataflowPartition.partition][dataflowPartition.stringDataflow],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    cancelParse: () => dispatch(showCode()),
    notifyUser: message => dispatch(notify(message)),
    update: objectDataflow => dispatch(update(objectDataflow)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SourceViewContainer);
