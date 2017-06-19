import { connect } from 'react-redux';
import EditorPanel from '../components/Editor/EditorPanel';
import { statePartition as editorPartition } from '../reducers/editor';
import { statePartition as dataflowPartition } from '../reducers/dataflow';
import toggleEditor from '../actions/editor';

function mapStateToProps(state) {
  return {
    isOpen: state[editorPartition.partition][editorPartition.isOpen],
    activeStep: state[dataflowPartition.partition][dataflowPartition.activeStep],
    flow: state[dataflowPartition.partition][dataflowPartition.objectDataflow],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onRequestChange: isOpen => dispatch(toggleEditor(null, isOpen)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditorPanel);
