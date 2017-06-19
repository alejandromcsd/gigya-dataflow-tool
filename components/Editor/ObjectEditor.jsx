import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import { MAPPINGS, ATTRIBUTE_TYPES } from '../../constants/Attributes';

class ObjectEditor extends Component {
  state = {
    selected: [],
  };

  getAttributeType = key => MAPPINGS[key.toUpperCase()] || ATTRIBUTE_TYPES.STRING;

  isSelected = index => this.state.selected.indexOf(index) !== -1;

  handleRowSelection = (selectedRows) => {
    this.setState({
      selected: selectedRows,
    });

    // Send to the parent seleted index and corresponding attr type
    const selectedItem = selectedRows.length ? selectedRows[0] : null;
    this.props.onSelect(
      selectedItem,
      selectedItem !== null
        ? this.getAttributeType(Object.keys(this.props.item)[selectedItem])
        : null,
    );
  };

  renderRows = item =>
    Object.keys(item).map((key, index) => (
      <TableRow key={key} selected={this.isSelected(index)}>
        <TableRowColumn>{key}</TableRowColumn>
        <TableRowColumn>{this.getAttributeType(key)}</TableRowColumn>
      </TableRow>
    ));

  render() {
    const { headerText, item } = this.props;
    return (
      <div>
        <h2>{headerText}</h2>
        <Table onRowSelection={this.handleRowSelection}>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Attribute</TableHeaderColumn>
              <TableHeaderColumn>Type</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {this.renderRows(item)}
          </TableBody>
        </Table>
      </div>
    );
  }
}

ObjectEditor.propTypes = {
  onSelect: PropTypes.func.isRequired,
  headerText: PropTypes.string.isRequired,
  // eslint-disable-next-line
  item: PropTypes.object.isRequired,
};

export default ObjectEditor;
