import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import CUSTOM_PROPS from '../../constants/CustomProps';
import DocEditor from './DocEditor';
import { GetFreezer } from '../../lib/json';

class EditorPanel extends Component {
  constructor() {
    super();
    this.stepInit = null;

    this.state = {
      frozen: null,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { activeStep, flow } = nextProps;
    if (activeStep === null) return;

    const currentStep = flow.steps[activeStep];
    if ((!this.stepInit || this.stepInit.id !== currentStep.id)) {
      this.stepInit = currentStep;
      this.setState({
        frozen: GetFreezer(this.stepInit).get(),
      });
    }
  }

  onTreeUpdate = (updatedFlow, activeStep) => {
    // TODO: Ideally we don't use local state here, but redux
    // However we should refactor DocEditor before doing this.
    this.stepInit = updatedFlow.json;
    this.setState({
      frozen: updatedFlow,
    });
    this.props.onUpdateStep(updatedFlow.json, activeStep);
  };

  render() {
    const { isOpen, activeStep, onRequestChange, flow } = this.props;
    const currentItem = flow.steps[activeStep];
    let frozen = this.state.frozen;

    if (!frozen && currentItem) {
      frozen = GetFreezer(currentItem).get();
    }

    return activeStep !== null && frozen ?
      (<Drawer
        width={400}
        open={isOpen}
        docked={false}
        onRequestChange={onRequestChange}
        openSecondary
      >
        <h2>Attributes for {currentItem.id}</h2>
        <div className="editorTreeView">
          <DocEditor
            store={frozen}
            original={frozen}
            onUpdate={updatedFlow => this.onTreeUpdate(updatedFlow, activeStep)}
            expanded
          />
        </div>
      </Drawer>)
      : null;
  }
}

EditorPanel.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestChange: PropTypes.func.isRequired,
  onUpdateStep: PropTypes.func.isRequired,
  activeStep: PropTypes.number,
  flow: CUSTOM_PROPS.FLOW.isRequired,
};

EditorPanel.defaultProps = {
  activeStep: null,
};

export default EditorPanel;
