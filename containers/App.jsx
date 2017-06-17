import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HeaderContainer from './HeaderContainer';
import MainSectionContainer from './MainSectionContainer';
import NotificationContainer from './NotificationContainer';
import theme from '../src/material_ui_raw_theme_file';

// eslint-disable-next-line
class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={theme}>
          <div>
            <HeaderContainer />
            <MainSectionContainer />
            <NotificationContainer />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default connect()(App);
