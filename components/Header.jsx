import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import Undo from 'material-ui/svg-icons/content/undo';
import Redo from 'material-ui/svg-icons/content/redo';
import FolderOpen from 'material-ui/svg-icons/file/folder-open';
import { fullWhite } from 'material-ui/styles/colors';

const buttonStyle = {
  color: fullWhite,
};

const Buttons = ({ showRepository, onShowRepository }) => (
  <div>
    {showRepository &&
      <FlatButton
        label="Repository"
        labelStyle={buttonStyle}
        icon={<FolderOpen color={fullWhite} />}
        onTouchTap={onShowRepository}
      />
    }
    <FlatButton
      label="Undo"
      labelStyle={buttonStyle}
      icon={<Undo color={fullWhite} />}
    />
    <FlatButton
      label="Redo"
      labelStyle={buttonStyle}
      icon={<Redo color={fullWhite} />}
    />
  </div>
);

Buttons.propTypes = {
  showRepository: PropTypes.bool.isRequired,
  onShowRepository: PropTypes.func.isRequired,
};

const Header = ({ showRepository, onShowRepository }) => (
  <header className="header">
    <AppBar
      title="Gigya Dataflow Tool"
      showMenuIconButton={false}
      iconElementRight={<Buttons
        showRepository={showRepository}
        onShowRepository={onShowRepository}
      />}
    />
  </header>
);

Header.propTypes = {
  showRepository: PropTypes.bool.isRequired,
  onShowRepository: PropTypes.func.isRequired,
};

export default Header;
