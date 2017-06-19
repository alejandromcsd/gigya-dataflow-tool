import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';

const styles = {
  message: {
    paddingTop: 40,
    paddingBottom: 40,
  },
};

class DialogScrollable extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ open: nextProps.open });
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { title, children } = this.props;

    return (
      <Dialog
        title={title}
        modal={false}
        open={this.state.open}
        onRequestClose={this.handleClose}
        autoScrollBodyContent
      >
        <div style={styles.message}>{children}</div>
      </Dialog>
    );
  }
}

DialogScrollable.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
  open: PropTypes.bool.isRequired,
};

DialogScrollable.defaultProps = {
  children: null,
};

export default DialogScrollable;
