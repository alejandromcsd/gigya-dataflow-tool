import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CodeMirror from 'react-codemirror';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import CustomScriptTemplate from '../../constants/CustomScriptTemplate';

const styles = {
  dialog: {
    width: '90%',
    maxWidth: 'none',
  },
};

class ScriptEditor extends Component {
  constructor() {
    super();
    this.state = {
      code: null,
    };
    this.options = {
      lineNumbers: true,
      mode: { name: 'javascript', json: true },
      tabSize: 2,
      indentWithTabs: true,
    };
  }

  render() {
    const { isOpen, onToogle } = this.props;
    let { code } = this.state;

    // Set default value with a sample script code
    if (!code) {
      code = CustomScriptTemplate;
    }

    const actions = [
      <FlatButton
        label="Cancel"
        primary
        onTouchTap={onToogle}
      />,
      <FlatButton
        label="Submit"
        primary
        onTouchTap={onToogle}
      />,
    ];

    return (
      <Dialog
        title="Script Editor"
        actions={actions}
        autoScrollBodyContent
        open={isOpen}
        contentStyle={styles.dialog}
        modal
      >
        <CodeMirror
          value={code}
          onChange={this.updateCode}
          options={this.options}
        />
      </Dialog>
    );
  }
}

ScriptEditor.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onToogle: PropTypes.func.isRequired,
};

export default ScriptEditor;
