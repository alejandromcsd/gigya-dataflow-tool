import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Step,
  Stepper,
  StepButton,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import TABS from '../constants/Tabs';
import CUSTOM_PROPS from '../constants/CustomProps';
import NewProject from '../components/NewProject';

const styles = {
  container: {
    paddingTop: 50,
    margin: 'auto',
    maxWidth: 400,
  },
  stepButton: {
    textAlign: 'left',
  },
  buttonContainer: {
    margin: '12px 0',
  },
  button: {
    marginRight: 12,
  },
};

class FlowView extends Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.activeTab === TABS.CODE && nextProps.activeTab === TABS.FLOW) {
      // Ensure every time tab is loaded, no steps are selected
      nextProps.setStepIndex(null);
    }
  }

  render() {
    const { flow, activeStep, setStepIndex, onDelete } = this.props;
    if (!flow.steps.length) {
      return <NewProject />;
    }

    return (
      <div style={styles.container}>
        <Stepper
          activeStep={activeStep}
          linear={false}
          orientation="vertical"
        >
          {flow.steps.map(({ id, type }, index) => (
            <Step key={id}>
              <StepButton
                onTouchTap={() => setStepIndex(index)}
                style={styles.stepButton}
              >
                {id} ({type})
              </StepButton>
              <StepContent>
                <div style={styles.buttonContainer}>
                  <RaisedButton
                    label="Delete"
                    disableTouchRipple
                    disableFocusRipple
                    primary
                    onTouchTap={onDelete}
                    style={styles.button}
                  />
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </div>
    );
  }
}

FlowView.propTypes = {
  flow: CUSTOM_PROPS.FLOW.isRequired,
  activeTab: PropTypes.string.isRequired,
  setStepIndex: PropTypes.func.isRequired,
  activeStep: PropTypes.number,
  onDelete: PropTypes.func.isRequired,
};

FlowView.defaultProps = {
  activeStep: null,
};

export default FlowView;
