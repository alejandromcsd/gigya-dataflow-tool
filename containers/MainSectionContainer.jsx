import { connect } from 'react-redux';
import MainSection from '../components/MainSection';
import { showFlow, showCode } from '../actions/menu';
import { statePartition } from '../reducers/menu';

const MainSectionContainer = MainSection;

function mapStateToProps(state) {
  return {
    activeTab: state[statePartition.partition][statePartition.activeTab],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onShowFlow: () => dispatch(showFlow()),
    onShowCode: () => dispatch(showCode()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainSectionContainer);
