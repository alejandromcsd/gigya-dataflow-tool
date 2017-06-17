import { connect } from 'react-redux';
import Header from '../components/Header';
import togglePanel from '../actions/repository';
import { statePartition } from '../reducers/menu';
import TABS from '../constants/Tabs';

const HeaderContainer = Header;

function mapStateToProps(state) {
  const tab = state[statePartition.partition][statePartition.activeTab];

  return {
    activeTab: tab,
    showRepository: tab === TABS.FLOW,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onShowRepository: () => {
      dispatch(togglePanel());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
