import { actionTypes } from '../reducers/menu';

export function showFlow() {
  return { type: actionTypes.SHOW_FLOW };
}
export function showCode() {
  return { type: actionTypes.SHOW_CODE };
}

export function showFlowCompleted() {
  return { type: actionTypes.SHOW_FLOW_COMPLETED };
}

export function showCodeCompleted() {
  return { type: actionTypes.SHOW_CODE_COMPLETED };
}
