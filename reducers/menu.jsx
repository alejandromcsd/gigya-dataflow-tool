import TABS from '../constants/Tabs';

export const actionTypes = {
  SHOW_FLOW: 'SHOW_FLOW',
  SHOW_CODE: 'SHOW_CODE',
  // SHOW_FLOW_COMPLETED: 'SHOW_FLOW_COMPLETED',
  // SHOW_CODE_COMPLETED: 'SHOW_CODE_COMPLETED',
};

export const statePartition = {
  partition: 'menu',
  activeTab: 'activeTab',
};

const initialState = {
  activeTab: TABS.FLOW,
};

export default function menu(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SHOW_FLOW:
      return {
        ...state,
        [statePartition.activeTab]: TABS.FLOW,
      };
    case actionTypes.SHOW_CODE:
      return {
        ...state,
        [statePartition.activeTab]: TABS.CODE,
      };
    default:
      return state;
  }
}
