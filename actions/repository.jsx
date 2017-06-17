import { actionTypes } from '../reducers/repository';

export default function togglePanel() {
  return { type: actionTypes.TOGGLE_PANEL };
}
