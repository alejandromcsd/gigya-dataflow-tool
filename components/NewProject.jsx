import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import NewIcon from 'material-ui/svg-icons/file/create-new-folder';
import MenuItem from 'material-ui/MenuItem';
import { update } from '../actions/dataflow';
import templates from '../templates';
import ImportJobContainer from '../containers/ImportJobContainer';

const styles = {
  button: {
    marginTop: 10,
  },
};

class NewProject extends Component {
  handleChange = (event, index, value) => this.props.updateFlow(value);

  render() {
    const { onNewProject, onImportJob } = this.props;

    return (
      <div className="noFlow">
        <h3>Hello :) You can start your new dataflow by any of these options:</h3>
        <div className="options">
          <div className="option">
            Adding steps from the repository panel or editing the source view
            <RaisedButton
              label="New dataflow"
              icon={<NewIcon />}
              onTouchTap={onNewProject}
              style={styles.button}
              primary
            />
          </div>
          <div className="option">
            Selecting a dataflow template. You can later add new steps from the repository panel
            <SelectField
              floatingLabelText="Scroll / select a template"
              onChange={this.handleChange}
              maxHeight={200}
              autoWidth
            >
              {
                templates.map(template => (<MenuItem
                  key={template.name}
                  value={template}
                  primaryText={template.name}
                />))
              }
            </SelectField>
          </div>
          <div className="option">
            Importing an existing IdentitySync Job using a API Key
            <RaisedButton
              label="Import dataflow"
              icon={<NewIcon />}
              onTouchTap={onImportJob}
              style={styles.button}
              primary
            />
          </div>
        </div>
        <ImportJobContainer />
      </div>
    );
  }
}

NewProject.propTypes = {
  updateFlow: PropTypes.func.isRequired,
  onNewProject: PropTypes.func.isRequired,
  onImportJob: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    updateFlow: objectDataflow => dispatch(update(objectDataflow)),
  };
}

export default connect(null, mapDispatchToProps)(NewProject);
