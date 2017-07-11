
import { connect } from 'react-redux';
import { statePartition as importJobPartition } from '../reducers/importJob';
import toggleImportDialog from '../actions/importJob';
import ImportJob from '../components/ImportJob';

function mapStateToProps(state) {
  return {
    isOpen: state[importJobPartition.partition][importJobPartition.isOpen],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onToogle: () => dispatch(toggleImportDialog()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ImportJob);
