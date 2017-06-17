import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CodeMirror from 'react-codemirror';
import { showCode } from '../actions/menu';
import { statePartition as menuPartition } from '../reducers/menu';
import { notify } from '../actions/notify';
import { IsJsonString } from '../lib/json';
import MESSAGES from '../constants/Messages';
import TABS from '../constants/Tabs';

require('codemirror/mode/javascript/javascript');

class SourceViewContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: this.props.parsedCode,
    };

    this.updateCode = this.updateCode.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeTab === TABS.CODE) return;
    if (!IsJsonString(this.state.code)) {
      nextProps.cancelParse();
      nextProps.notifyUser(MESSAGES.ERROR_PARSE);
    }
  }

  updateCode(newCode) {
    this.setState({
      code: newCode,
    });
  }

  render() {
    const options = {
      lineNumbers: true,
      mode: { name: 'javascript', json: true },
    };

    return (<CodeMirror
      value={this.state.code}
      onChange={this.updateCode}
      options={options}
    />);
  }
}

SourceViewContainer.propTypes = {
  parsedCode: PropTypes.string.isRequired,
  activeTab: PropTypes.string.isRequired,
  cancelParse: PropTypes.func.isRequired,
  notifyUser: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    activeTab: state[menuPartition.partition][menuPartition.activeTab],
    parsedCode: '// CODE HERE',
  };
}

function mapDispatchToProps(dispatch) {
  return {
    cancelParse: () => dispatch(showCode()),
    notifyUser: message => dispatch(notify(message)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SourceViewContainer);
