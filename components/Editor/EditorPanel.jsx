import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import CodeIcon from 'material-ui/svg-icons/device/dvr';
import CUSTOM_PROPS from '../../constants/CustomProps';
import DocEditor from './DocEditor';
import { GetFreezer } from '../../lib/json';

const styles = {
  scriptContainer: {
    padding: '8px 0 15px 8px',
  },
  scriptButton: {
    marginLeft: 10,
  },
};

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
    // TODO: Ideally we don't use local state here, instead redux
    // However we should refactor DocEditor before doing this.
    this.stepInit = updatedFlow.json;
    this.setState({
      frozen: updatedFlow,
    });
    this.props.onUpdateStep(updatedFlow.json, activeStep);
  };

  isScriptStep = currentItem => currentItem.type === 'record.evaluate'
    && currentItem.params;

  render() {
    const { activeStep, flow } = this.props;
    const currentItem = flow.steps[activeStep];
    let frozen = this.state.frozen;

    if (!frozen && currentItem) {
      frozen = GetFreezer(currentItem).get();
    }

    const scriptEditor = this.isScriptStep(currentItem) && (
      <div style={styles.scriptContainer}>
        <h2>Custom Script</h2>
        <RaisedButton
          style={styles.scriptButton}
          label="Edit custom script"
          onTouchTap={this.handleCreate}
          icon={<CodeIcon />}
          primary
        />
      </div>
    );

    return activeStep !== null && frozen ?
      (<div>
        {scriptEditor}
        <h2>Attributes for {currentItem.id}</h2>
        <div className="editorTreeView">
          <DocEditor
            store={frozen}
            original={frozen}
            onUpdate={updatedFlow => this.onTreeUpdate(updatedFlow, activeStep)}
            expanded
          />
        </div>
      </div>)
      : null;
  }
}

EditorPanel.propTypes = {
  onUpdateStep: PropTypes.func.isRequired,
  activeStep: PropTypes.number,
  flow: CUSTOM_PROPS.FLOW.isRequired,
};

EditorPanel.defaultProps = {
  activeStep: null,
};

export default EditorPanel;
