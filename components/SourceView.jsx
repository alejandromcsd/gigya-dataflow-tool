import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CodeMirror from 'react-codemirror';
import { ToJson } from '../lib/json';
import MESSAGES from '../constants/Messages';
import TABS from '../constants/Tabs';

require('codemirror/mode/javascript/javascript');

class SourceView extends Component {
  constructor() {
    super();
    this.state = {
      code: null,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.activeTab === TABS.CODE && nextProps.activeTab === TABS.FLOW) {
      const objectDataflow = ToJson(this.state.code);
      if (objectDataflow) {
        nextProps.update(objectDataflow);
      } else {
        nextProps.cancelParse();
        nextProps.notifyUser(MESSAGES.ERROR_PARSE);
      }
    }

    this.setState({ code: nextProps.parsedCode });
  }

  updateCode = newCode => this.setState({ code: newCode });

  render() {
    const { code } = this.state;
    if (!this.props.show) return null;

    const options = {
      lineNumbers: true,
      mode: { name: 'javascript', json: true },
    };

    return (<CodeMirror
      value={code}
      onChange={this.updateCode}
      options={options}
    />);
  }
}

SourceView.propTypes = {
  parsedCode: PropTypes.string.isRequired,
  activeTab: PropTypes.string.isRequired,
  cancelParse: PropTypes.func.isRequired,
  notifyUser: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

export default SourceView;
