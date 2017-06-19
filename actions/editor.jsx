import { actionTypes } from '../reducers/editor';

export default function toggleEditor(index, forcedStatus) {
  return {
    type: actionTypes.TOGGLE_EDITOR,
    payload: {
      index,
      forcedStatus,
    },
  };
}
