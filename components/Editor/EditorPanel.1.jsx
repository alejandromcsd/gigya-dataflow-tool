import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import ObjectEditor from './ObjectEditor';
import CUSTOM_PROPS from '../../constants/CustomProps';
// import { ATTRIBUTE_TYPES } from '../../constants/Attributes';

class EditorPanel extends Component {
  constructor() {
    super();
    this.state = {
      secondLevelItem: null,
      thirdLevelItem: null,
    };
  }

  setSecondLevel = (item, attributeType) => {
    this.setState({
      secondLevelItem: {
        item,
        attributeType,
      },
    });
  }

  getEditor = (headerText, item, onSelect) =>
    <ObjectEditor headerText item onSelect={onSelect} />;

  renderLevel = (level) => {
    const hasItem = level && level.item !== null;
    return hasItem ? null : null;
  }

  render() {
    const { isOpen, activeStep, flow, onRequestChange } = this.props;
    const { secondLevelItem } = this.state;
    const currentItem = flow.steps[activeStep];

    return activeStep !== null ?
      (<Drawer
        width={400}
        open={isOpen}
        docked={false}
        onRequestChange={onRequestChange}
        openSecondary
      >
        <ObjectEditor
          headerText={`Attributes for ${currentItem.id}`}
          item={currentItem}
          onSelect={this.setSecondLevel}
        />
        {this.renderLevel(secondLevelItem)}
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
