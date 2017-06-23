import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { update } from '../actions/dataflow';
import templates from '../templates';

const styles = {
  select: {
    marginLeft: 30,
  },
};

class NewProject extends Component {
  handleChange = (event, index, value) => this.props.updateFlow(value);

  render() {
    return (
      <div className="noFlow">
        <h3>Hello :) You can start your new dataflow by:</h3>
        <ol>
          <li>Adding steps from the repository panel</li>
          <li>Editing the source view</li>
          <li>Importing one of Gigya&apos;s Dataflow Templates:</li>
        </ol>
        <SelectField
          floatingLabelText="Select a dataflow template"
          onChange={this.handleChange}
          style={styles.select}
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
    );
  }
}

NewProject.propTypes = {
  updateFlow: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    updateFlow: objectDataflow => dispatch(update(objectDataflow)),
  };
}

export default connect(null, mapDispatchToProps)(NewProject);
