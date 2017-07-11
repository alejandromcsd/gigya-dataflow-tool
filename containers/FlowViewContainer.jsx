
import { connect } from 'react-redux';
import { statePartition as menuPartition } from '../reducers/menu';
import { statePartition as dataflowPartition } from '../reducers/dataflow';
import { setActiveStep, deleteActiveStep, moveUpStep, moveDownStep } from '../actions/dataflow';
import { toggleEditor } from '../actions/editor';
import togglePanel from '../actions/repository';
import toggleImportDialog from '../actions/importJob';
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
    setStepIndex: index => dispatch(setActiveStep(index)),
    showEditor: index => dispatch(toggleEditor(index)),
    onDelete: () => dispatch(deleteActiveStep()),
    onMoveUp: () => dispatch(moveUpStep()),
    onMoveDown: () => dispatch(moveDownStep()),
    onShowRepository: () => dispatch(togglePanel()),
    onImportJob: () => dispatch(toggleImportDialog()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FlowView);
