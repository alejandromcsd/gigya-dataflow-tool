import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CodeMirror from 'react-codemirror';
import Clipboard from 'clipboard';
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

  componentDidMount() {
    const { notifyUser } = this.props;

    const clipboard = new Clipboard('.copyToClipboard', {
      text: () => {
        const { activeTab, parsedCode } = this.props;
        const { code } = this.state;

        if (activeTab === TABS.CODE) {
          if (this.parseCurrentCode()) {
            return code;
          }
          return `Gigya Dataflow Tool: ${MESSAGES.ERROR_PARSE}`;
        }
        return parsedCode;
      },
    });

    clipboard.on('success', (e) => {
      if (!e.text.includes(MESSAGES.ERROR_PARSE)) {
        notifyUser(MESSAGES.SUCCESS_COPY);
      }

      e.clearSelection();
    });

    clipboard.on('error', (e) => {
      notifyUser(MESSAGES.ERROR_COPY);
      console.error('Action:', e.action); // eslint-disable-line
      console.error('Trigger:', e.trigger); // eslint-disable-line
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.activeTab === TABS.CODE && nextProps.activeTab === TABS.FLOW) {
      this.parseCurrentCode();
    }

    this.setState({ code: nextProps.parsedCode });
  }

  parseCurrentCode() {
    const { update, cancelParse, notifyUser } = this.props;

    const objectDataflow = ToJson(this.state.code);
    if (objectDataflow) {
      update(objectDataflow);
      return true;
    }

    cancelParse();
    notifyUser(MESSAGES.ERROR_PARSE);
    return false;
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
