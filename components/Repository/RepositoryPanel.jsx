import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import AddCircle from 'material-ui/svg-icons/content/add-circle';
import LaptopMac from 'material-ui/svg-icons/hardware/laptop-mac';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import datasource from '../../repository/datasource';
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
  addButton: {
    marginTop: -5,
  },
  helpButton: {
    float: 'right',
    marginTop: 7,
    marginRight: 7,
  },
};

class RepositoryPanel extends Component {
  showDialog = () => window.open(GIGYA.DEV_URL);

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
                tooltip="Add to flow"
                tooltipPosition="top-left"
                style={styles.addButton}
              >
                <AddCircle />
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

    return (
      <Drawer
        open={open}
        width={styles.drawer.width}
      >
        <RaisedButton
          label="See docu"
          icon={<LaptopMac />}
          style={styles.helpButton}
          onTouchTap={this.showDialog}
          primary
        />
        <h2>Scripts</h2>
        {this.renderCard('Datasource', datasource)}
        {this.renderCard('Field', datasource)}
        {this.renderCard('File', datasource)}
        {this.renderCard('Record', datasource)}
      </Drawer>
    );
  }
}

RepositoryPanel.propTypes = {
  open: PropTypes.bool.isRequired,
  onAddScript: PropTypes.func.isRequired,
};

export default RepositoryPanel;
