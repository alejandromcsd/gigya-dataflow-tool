import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import CodeIcon from 'material-ui/svg-icons/device/dvr';
import CUSTOM_PROPS from '../../constants/CustomProps';
import DocEditor from './DocEditor';
import { GetFreezer } from '../../lib/json';
import ScriptEditor from './ScriptEditor';

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

  onTreeUpdate = (updatedFlow) => {
    const { onUpdateStep } = this.props;

    // TODO: Ideally we don't use local state here, instead redux
    // However we should refactor DocEditor before doing this.
    this.stepInit = updatedFlow.json;
    this.setState({
      frozen: updatedFlow,
    });
    onUpdateStep(updatedFlow.json);
  };

  onScriptUpdate = (base64Script) => {
    const { activeStep, flow, onUpdateStep, onRequestChange } = this.props;
    const updatedItem = {
      ...flow.steps[activeStep],
      params: {
        script: base64Script,
      },
    };
    onUpdateStep(updatedItem);
    onRequestChange(false); // Close the editor panel
  };

  isScriptStep = currentItem => currentItem.type === 'record.evaluate'
    && currentItem.params;

  render() {
    const { activeStep, flow, isScriptOpen, onToogleScript } = this.props;
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
          onTouchTap={onToogleScript}
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
            onUpdate={updatedFlow => this.onTreeUpdate(updatedFlow)}
            expanded
          />
        </div>
        {this.isScriptStep(currentItem) &&
          <ScriptEditor
            isOpen={isScriptOpen}
            onToogle={onToogleScript}
            onSave={this.onScriptUpdate}
            script={currentItem.params.script}
          />
        }
      </div>)
      : null;
  }
}

EditorPanel.propTypes = {
  isScriptOpen: PropTypes.bool.isRequired,
  onUpdateStep: PropTypes.func.isRequired,
  onRequestChange: PropTypes.func.isRequired,
  onToogleScript: PropTypes.func.isRequired,
  activeStep: PropTypes.number,
  flow: CUSTOM_PROPS.FLOW.isRequired,
};

EditorPanel.defaultProps = {
  activeStep: null,
};

export default EditorPanel;
