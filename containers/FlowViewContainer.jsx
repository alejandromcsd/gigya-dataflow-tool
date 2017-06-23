import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Step,
  Stepper,
  StepButton,
} from 'material-ui/Stepper';
import { statePartition as menuPartition } from '../reducers/menu';
import { statePartition as dataflowPartition } from '../reducers/dataflow';
import { setActiveStep } from '../actions/dataflow';
import toggleEditor from '../actions/editor';
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
};

class FlowViewContainer extends Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.activeTab === TABS.CODE && nextProps.activeTab === TABS.FLOW) {
      // Ensure every time tab is loaded, no steps are selected
      nextProps.setStepIndex(null);
    }
  }

  render() {
    const { flow, activeStep, setStepIndex } = this.props;
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
            </Step>
          ))}
        </Stepper>
      </div>
    );
  }
}

FlowViewContainer.propTypes = {
  flow: CUSTOM_PROPS.FLOW.isRequired,
  activeTab: PropTypes.string.isRequired,
  setStepIndex: PropTypes.func.isRequired,
  activeStep: PropTypes.number,
};

FlowViewContainer.defaultProps = {
  activeStep: null,
};

function mapStateToProps(state) {
  return {
    activeTab: state[menuPartition.partition][menuPartition.activeTab],
    flow: state[dataflowPartition.partition][dataflowPartition.objectDataflow],
    activeStep: state[dataflowPartition.partition][dataflowPartition.activeStep],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setStepIndex: (index) => {
      dispatch(setActiveStep(index));
      dispatch(toggleEditor(index));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FlowViewContainer);
