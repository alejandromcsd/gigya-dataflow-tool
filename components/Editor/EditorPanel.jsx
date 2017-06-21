import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import CUSTOM_PROPS from '../../constants/CustomProps';
import DocEditor from './DocEditor';
import { GetFreezer } from '../../lib/json';

// eslint-disable-next-line
class EditorPanel extends Component {
  constructor() {
    super();
    this.state = {
      frozen: GetFreezer().get(),
    };
  }

  onTreeUpdate = (updatedFlow) => {
    this.setState({
      frozen: updatedFlow,
    });
  };

  render() {
    const { isOpen, activeStep, onRequestChange, flow } = this.props;
    const currentItem = flow.steps[activeStep];
    const frozen = this.state.frozen;

    return activeStep !== null ?
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
            onUpdate={this.onTreeUpdate}
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
  activeStep: PropTypes.number,
  flow: CUSTOM_PROPS.FLOW.isRequired,
};

EditorPanel.defaultProps = {
  activeStep: null,
};

export default EditorPanel;
