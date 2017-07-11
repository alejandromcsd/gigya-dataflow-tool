import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class ImportJob extends Component {
  onImport = () => {
    const { onToogle } = this.props;
    onToogle();
  };

  render() {
    const { isOpen, onToogle } = this.props;

    const actions = [
      <FlatButton
        label="Cancel"
        primary
        onTouchTap={onToogle}
      />,
      <FlatButton
        label="Save"
        primary
        onTouchTap={this.onImport}
      />,
    ];

    return (
      <Dialog
        title="Script Editor"
        actions={actions}
        open={isOpen}
        modal
      >
        FORM TO GIGYA API HERE
      </Dialog>
    );
  }
}

ImportJob.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onToogle: PropTypes.func.isRequired,
};

export default ImportJob;
