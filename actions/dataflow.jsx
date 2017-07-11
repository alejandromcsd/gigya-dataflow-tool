import { actionTypes } from '../reducers/dataflow';

export function update(objectDataflow) {
  return { type: actionTypes.UPDATE, objectDataflow };
}

export function updateStep(updatedStep, stepIndex) {
  return { type: actionTypes.UPDATE_STEP, payload: { updatedStep, stepIndex } };
}

export function deleteActiveStep() {
  return { type: actionTypes.DELETE_ACTIVE_STEP };
}

export function moveUpStep() {
  return { type: actionTypes.MOVEUP_STEP };
}

export function moveDownStep() {
  return { type: actionTypes.MOVEDOWN_STEP };
}

export function setActiveStep(index) {
  return { type: actionTypes.SET_ACTIVE_STEP, index };
}

export function addScript(template) {
  return { type: actionTypes.ADD_SCRIPT, template };
}
