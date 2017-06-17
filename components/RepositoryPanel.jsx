import React from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const RepositoryPanel = ({ open }) => (
  <Drawer open={open}>
    <MenuItem>Menu Item</MenuItem>
    <MenuItem>Menu Item 2</MenuItem>
  </Drawer>
);

RepositoryPanel.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default RepositoryPanel;
