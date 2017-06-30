import React from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import { connect } from 'react-redux';
import EditorPanel from '../components/Editor/EditorPanel';
import { statePartition as editorPartition } from '../reducers/editor';
import { statePartition as dataflowPartition } from '../reducers/dataflow';
import toggleEditor from '../actions/editor';
import { updateStep } from '../actions/dataflow';

const EditorContainer = props => (
  <Drawer
    width={600}
    open={props.isOpen}
    docked={false}
    onRequestChange={props.onRequestChange}
    openSecondary
  >
    {props.isOpen ? <EditorPanel {...props} /> : null}
  </Drawer>);

EditorContainer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestChange: PropTypes.func.isRequired,
};

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
    onUpdateStep: (updatedStep, stepIndex) => dispatch(updateStep(updatedStep, stepIndex)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditorContainer);
