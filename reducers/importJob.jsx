export const actionTypes = {
  TOGGLE_IMPORT_DIALOG: 'TOGGLE_IMPORT_DIALOG',
};

export const statePartition = {
  partition: 'importJob',
  isOpen: 'isOpen',
};

const initialState = {
  [statePartition.isOpen]: false,
};

export default function importJob(state = initialState, action) {
  switch (action.type) {
    case actionTypes.TOGGLE_IMPORT_DIALOG:
      return {
        ...state,
        [statePartition.isOpen]: !state[statePartition.isOpen],
      };
    default:
      return state;
  }
}
