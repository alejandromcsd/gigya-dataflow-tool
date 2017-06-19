export const actionTypes = {
  TOGGLE_EDITOR: 'TOGGLE_EDITOR',
};

export const statePartition = {
  partition: 'editor',
  isOpen: 'isOpen',
};

const initialState = {
  [statePartition.isOpen]: false,
};

export default function editor(state = initialState, action) {
  switch (action.type) {
    case actionTypes.TOGGLE_EDITOR:
      return {
        ...state,
        [statePartition.isOpen]: !!action.payload.forcedStatus || action.payload.index !== null,
      };
    default:
      return state;
  }
}
