import blank from '../templates/blank';
import { BeautifyJson, EnsureUniqueId } from '../lib/json';

export const actionTypes = {
  UPDATE: 'UPDATE',
  SET_ACTIVE_STEP: 'SET_ACTIVE_STEP',
  ADD_SCRIPT: 'ADD_SCRIPT',
};

export const statePartition = {
  partition: 'dataflow',
  objectDataflow: 'objectDataflow',
  stringDataflow: 'stringDataflow',
  activeStep: 'activeStep',
};

const initialState = {
  objectDataflow: { ...blank },
  stringDataflow: BeautifyJson(blank),
  activeStep: null,
};

export default function dataflow(state = initialState, action) {
  switch (action.type) {
    case actionTypes.UPDATE: {
      return {
        ...state,
        [statePartition.objectDataflow]: action.objectDataflow,
        [statePartition.stringDataflow]: BeautifyJson(action.objectDataflow),
      };
    }
    case actionTypes.ADD_SCRIPT: {
      const newDataflow = {
        ...state.objectDataflow,
        steps: [
          ...state.objectDataflow.steps,
          EnsureUniqueId(state.objectDataflow.steps, action.template),
        ],
      };

      return {
        ...state,
        [statePartition.objectDataflow]: newDataflow,
        [statePartition.stringDataflow]: BeautifyJson(newDataflow),
      };
    }
    case actionTypes.SET_ACTIVE_STEP: {
      return {
        ...state,
        [statePartition.activeStep]: action.index,
      };
    }
    default:
      return state;
  }
}
