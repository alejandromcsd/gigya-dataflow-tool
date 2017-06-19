import { actionTypes } from '../reducers/dataflow';

export function update(objectDataflow) {
  return { type: actionTypes.UPDATE, objectDataflow };
}

export function setActiveStep(index) {
  return { type: actionTypes.SET_ACTIVE_STEP, index };
}

export function addScript(template) {
  return { type: actionTypes.ADD_SCRIPT, template };
}
