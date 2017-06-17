import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'material-ui/Tabs';
import { lightBlue700 } from 'material-ui/styles/colors';
import Code from 'material-ui/svg-icons/action/code';
import Scale from 'material-ui/svg-icons/editor/linear-scale';
import RepositoryContainer from '../containers/RepositoryContainer';
import SourceViewContainer from '../containers/SourceViewContainer';
import TABS from '../constants/Tabs';

const tabStyle = {
  backgroundColor: lightBlue700,
};

const MainSection = ({ activeTab, onShowFlow, onShowCode }) => (
  <section className="main">
    <RepositoryContainer />
    <Tabs value={activeTab}>
      <Tab
        value={TABS.FLOW}
        label="Flow view"
        icon={<Scale />}
        style={tabStyle}
        onActive={onShowFlow}
      >
        <div>
          CONTENT HERE
        </div>
      </Tab>
      <Tab
        value={TABS.CODE}
        label="Source view"
        icon={<Code />}
        style={tabStyle}
        onActive={onShowCode}
      >
        <SourceViewContainer />
      </Tab>
    </Tabs>
  </section>
);

MainSection.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onShowFlow: PropTypes.func.isRequired,
  onShowCode: PropTypes.func.isRequired,
};

export default MainSection;
