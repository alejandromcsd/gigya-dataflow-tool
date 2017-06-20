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

const Header = ({ showRepository, onShowRepository, isRepositoryOpen }) => {
  const Buttons = () => (
    <div>
      {showRepository &&
        <FlatButton
          label={`${isRepositoryOpen ? 'Hide' : 'Show'} Repository`}
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

  return (
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
};

Header.propTypes = {
  showRepository: PropTypes.bool.isRequired,
  isRepositoryOpen: PropTypes.bool.isRequired,
  onShowRepository: PropTypes.func.isRequired,
};

export default Header;
