
import { connect } from 'react-redux';
import { statePartition as menuPartition } from '../reducers/menu';
import { statePartition as dataflowPartition } from '../reducers/dataflow';
import { setActiveStep, deleteActiveStep } from '../actions/dataflow';
import { toggleEditor } from '../actions/editor';
import FlowView from '../components/FlowView';

function mapStateToProps(state) {
  return {
    activeTab: state[menuPartition.partition][menuPartition.activeTab],
    flow: state[dataflowPartition.partition][dataflowPartition.objectDataflow],
    activeStep: state[dataflowPartition.partition][dataflowPartition.activeStep],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setStepIndex: (index) => {
      dispatch(setActiveStep(index));
      dispatch(toggleEditor(index));
    },
    onDelete: () => dispatch(deleteActiveStep()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FlowView);
