import { connect } from 'react-redux';
import Header from '../components/Header';
import togglePanel from '../actions/repository';
import { statePartition as menuPartition } from '../reducers/menu';
import { statePartition as repositoryPartition } from '../reducers/repository';
import TABS from '../constants/Tabs';

const HeaderContainer = Header;

function mapStateToProps(state) {
  const tab = state[menuPartition.partition][menuPartition.activeTab];

  return {
    activeTab: tab,
    showRepository: tab === TABS.FLOW,
    isRepositoryOpen: tab === TABS.CODE
      ? false
      : state[repositoryPartition.partition][repositoryPartition.isOpen],
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
