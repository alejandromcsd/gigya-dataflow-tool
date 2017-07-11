import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Step,
  Stepper,
  StepButton,
  StepContent,
} from 'material-ui/Stepper';
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui/svg-icons/image/edit';
import RemoveIcon from 'material-ui/svg-icons/action/delete';
import UpIcon from 'material-ui/svg-icons/navigation/arrow-upward';
import DownIcon from 'material-ui/svg-icons/navigation/arrow-downward';
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
    marginTop: 10,
    marginBottom: 30,
  },
};

class FlowView extends Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.activeTab === TABS.CODE && nextProps.activeTab === TABS.FLOW) {
      // Ensure every time tab is loaded, no steps are selected
      nextProps.setStepIndex(null);
    }
  }

  editStep = () => this.props.showEditor(this.props.activeStep);

  render() {
    const {
      flow,
      activeStep,
      setStepIndex,
      onDelete,
      onMoveUp,
      onMoveDown,
      onShowRepository,
      onImportJob,
    } = this.props;

    if (!flow.steps.length) {
      return (<NewProject
        onNewProject={onShowRepository}
        onImportJob={onImportJob}
      />);
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
                  <IconButton tooltip="Edit" onTouchTap={this.editStep}>
                    <EditIcon />
                  </IconButton>
                  <IconButton tooltip="Delete" onTouchTap={onDelete}>
                    <RemoveIcon />
                  </IconButton>
                  <IconButton
                    tooltip="Move up"
                    onTouchTap={onMoveUp}
                    disabled={index === 0}
                  >
                    <UpIcon />
                  </IconButton>
                  <IconButton
                    tooltip="Move down"
                    onTouchTap={onMoveDown}
                    disabled={index === flow.steps.length - 1}
                  >
                    <DownIcon />
                  </IconButton>
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
  onMoveUp: PropTypes.func.isRequired,
  onShowRepository: PropTypes.func.isRequired,
  onMoveDown: PropTypes.func.isRequired,
  showEditor: PropTypes.func.isRequired,
  onImportJob: PropTypes.func.isRequired,
  activeStep: PropTypes.number,
  onDelete: PropTypes.func.isRequired,
};

FlowView.defaultProps = {
  activeStep: null,
};

export default FlowView;
