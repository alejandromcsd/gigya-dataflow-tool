import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EditorPanel from '../components/Editor/EditorPanel';
import { statePartition as editorPartition } from '../reducers/editor';
import { statePartition as dataflowPartition } from '../reducers/dataflow';
import toggleEditor from '../actions/editor';
import { updateStep } from '../actions/dataflow';

const EditorContainer = props => (props.isOpen ? <EditorPanel {...props} /> : null);

EditorContainer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
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
