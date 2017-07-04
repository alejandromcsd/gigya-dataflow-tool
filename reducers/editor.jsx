export const actionTypes = {
  TOGGLE_EDITOR: 'TOGGLE_EDITOR',
  TOGGLE_SCRIPT_EDITOR: 'TOGGLE_SCRIPT_EDITOR',
};

export const statePartition = {
  partition: 'editor',
  isOpen: 'isOpen',
  isScriptOpen: 'isScriptOpen',
};

const initialState = {
  [statePartition.isOpen]: false,
  [statePartition.isScriptOpen]: false,
};

export default function editor(state = initialState, action) {
  switch (action.type) {
    case actionTypes.TOGGLE_EDITOR:
      return {
        ...state,
        [statePartition.isOpen]: !!action.payload.forcedStatus || action.payload.index !== null,
      };
    case actionTypes.TOGGLE_SCRIPT_EDITOR:
      return {
        ...state,
        [statePartition.isScriptOpen]: !state[statePartition.isScriptOpen],
      };
    default:
      return state;
  }
}
