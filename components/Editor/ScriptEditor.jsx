import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Base64 } from 'js-base64';
import CodeMirror from 'react-codemirror';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import CustomScriptTemplate from '../../constants/CustomScriptTemplate';

const styles = {
  dialog: {
    width: '90%',
    maxWidth: 'none',
  },
  dialogParent: {
    minHeight: 300,
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

  componentWillReceiveProps() {
    const { script } = this.props;
    this.setState({
      code: script ? Base64.decode(script) : CustomScriptTemplate,
    });
  }

  saveScript = () => {
    const { onSave, onToogle } = this.props;
    const code = Base64.encode(this.state.code);
    onSave(code);
    onToogle();
  };

  updateCode = newCode => this.setState({ code: newCode });

  render() {
    const { isOpen, onToogle } = this.props;
    const { code } = this.state;

    const actions = [
      <FlatButton
        label="Cancel"
        primary
        onTouchTap={onToogle}
      />,
      <FlatButton
        label="Save"
        primary
        onTouchTap={this.saveScript}
      />,
    ];

    return (
      <Dialog
        title="Script Editor"
        actions={actions}
        autoScrollBodyContent
        open={isOpen}
        contentStyle={styles.dialog}
        bodyStyle={styles.dialogParent}
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
  script: PropTypes.string.isRequired,
  onToogle: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default ScriptEditor;
