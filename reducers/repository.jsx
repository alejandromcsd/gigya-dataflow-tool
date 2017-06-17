export const actionTypes = {
  TOGGLE_PANEL: 'TOGGLE_PANEL',
};

export const statePartition = {
  partition: 'repository',
  isOpen: 'isOpen',
};

const initialState = {
  [statePartition.isOpen]: false,
};

export default function repository(state = initialState, action) {
  switch (action.type) {
    case actionTypes.TOGGLE_PANEL:
      return {
        ...state,
        [statePartition.isOpen]: !state[statePartition.isOpen],
      };
    default:
      return state;
  }
}
