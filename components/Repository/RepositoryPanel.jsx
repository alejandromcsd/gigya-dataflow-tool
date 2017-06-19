import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import IconButton from 'material-ui/IconButton';
import datasource from '../../repository/datasource';
import DialogScrollable from './DialogScrollable';
import MESSAGES from '../../constants/Messages';
import GIGYA from '../../constants/Gigya';

const styles = {
  drawer: {
    width: 300,
  },
  items: {
    marginTop: -30,
  },
  item: {
    fontSize: 12,
    height: 40,
  },
  infoButton: {
    marginTop: -5,
  },
};

class RepositoryPanel extends Component {
  constructor() {
    super();
    this.state = {
      dialogTitle: '',
      dialogOpen: false,
    };
  }

  dialogBody = script => (
    <div>
      {script.description}
      <p><a href={GIGYA.DEV_URL} target="_blank">{MESSAGES.SCRIPT_MORE}</a></p>
    </div>);

  showDialog = (script) => {
    this.setState({
      dialogTitle: `Description: ${script.id}`,
      dialogContent: this.dialogBody(script),
      dialogOpen: true,
    });
  };

  renderItems = items => (
    <div className="itemsContainer" style={styles.items}>
      {
        items.map(script => (
          <ListItem
            key={script.id}
            primaryText={script.id}
            onTouchTap={() => this.props.onAddScript(script.template)}
            rightIcon={
              <IconButton
                tooltip="See more"
                tooltipPosition="top-left"
                style={styles.infoButton}
                onTouchTap={() => this.showDialog(script)}
              >
                <ActionInfo />
              </IconButton>
            }
            style={styles.item}
          />))
      }
    </div>
  );

  renderCard = (title, items) => (
    <Card>
      <CardHeader
        title={title}
        actAsExpander
        showExpandableButton
      />
      <CardText expandable>
        <List>
          {this.renderItems(items)}
        </List>
      </CardText>
    </Card>
  );

  render() {
    const { open } = this.props;
    const { dialogTitle, dialogContent, dialogOpen } = this.state;

    return (
      <Drawer
        open={open}
        width={styles.drawer.width}
      >
        <h2>Script Repository</h2>
        {this.renderCard('Datasource', datasource)}
        {this.renderCard('Field', datasource)}
        {this.renderCard('File', datasource)}
        {this.renderCard('Record', datasource)}
        <DialogScrollable
          title={dialogTitle}
          open={dialogOpen}
        >
          {dialogContent}
        </DialogScrollable>
      </Drawer>
    );
  }
}

RepositoryPanel.propTypes = {
  open: PropTypes.bool.isRequired,
  onAddScript: PropTypes.func.isRequired,
};

export default RepositoryPanel;
