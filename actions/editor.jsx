import { actionTypes } from '../reducers/editor';

export function toggleEditor(index, forcedStatus) {
  return {
    type: actionTypes.TOGGLE_EDITOR,
    payload: {
      index,
      forcedStatus,
    },
  };
}

export function toggleScriptEditor() {
  return { type: actionTypes.TOGGLE_SCRIPT_EDITOR };
}
