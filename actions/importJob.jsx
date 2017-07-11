import { actionTypes } from '../reducers/importJob';

export default function toggleImportDialog() {
  return { type: actionTypes.TOGGLE_IMPORT_DIALOG };
}
