import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import AutoComplete from 'material-ui/AutoComplete';
import { List, ListItem } from 'material-ui/List';
import AddCircle from 'material-ui/svg-icons/content/add-circle';
import IconButton from 'material-ui/IconButton';
import datasource from '../../repository/datasource';
import field from '../../repository/field';
import file from '../../repository/file';
import record from '../../repository/record';

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
  autoComplete: {
    container: {
      paddingLeft: 10,
      paddingBottom: 10,
    },
  },
};

const allSteps = {
  dataSource: [
    ...datasource,
    ...field,
    ...file,
    ...record,
  ],
  dataSourceConfig: {
    text: 'id',
    value: 'template',
  },
};

class RepositoryPanel extends Component {

  handleAutoComplete = (selectedItem, index) => {
    if (index >= 0) {
      this.props.onAddScript(selectedItem.template);
    }
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
        <AutoComplete
          floatingLabelText="Search in script repository"
          filter={AutoComplete.caseInsensitiveFilter}
          dataSource={allSteps.dataSource}
          dataSourceConfig={allSteps.dataSourceConfig}
          onNewRequest={this.handleAutoComplete}
          style={styles.autoComplete.container}
        />
        {this.renderCard('Datasource', datasource)}
        {this.renderCard('Field', field)}
        {this.renderCard('File', file)}
        {this.renderCard('Record', record)}
      </Drawer>
    );
  }
}

RepositoryPanel.propTypes = {
  open: PropTypes.bool.isRequired,
  onAddScript: PropTypes.func.isRequired,
};

export default RepositoryPanel;
