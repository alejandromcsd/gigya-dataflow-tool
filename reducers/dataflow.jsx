import blank from '../templates/blank';
import { BeautifyJson, EnsureUniqueId } from '../lib/json';

export const actionTypes = {
  UPDATE: 'UPDATE',
  UPDATE_STEP: 'UPDATE_STEP',
  DELETE_ACTIVE_STEP: 'DELETE_ACTIVE_STEP',
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
    case actionTypes.UPDATE_STEP: {
      const newDataflow = {
        ...state[statePartition.objectDataflow],
        steps: state[statePartition.objectDataflow].steps.map((step, index) => {
          if (index !== action.payload.stepIndex) {
            return step;
          }

          return {
            ...action.payload.updatedStep,
          };
        }),
      };

      return {
        ...state,
        [statePartition.objectDataflow]: newDataflow,
        [statePartition.stringDataflow]: BeautifyJson(newDataflow),
      };
    }
    case actionTypes.ADD_SCRIPT: {
      const newDataflow = {
        ...state[statePartition.objectDataflow],
        steps: [
          ...state[statePartition.objectDataflow].steps,
          EnsureUniqueId(state[statePartition.objectDataflow].steps, action.template),
        ],
      };

      return {
        ...state,
        [statePartition.objectDataflow]: newDataflow,
        [statePartition.stringDataflow]: BeautifyJson(newDataflow),
      };
    }
    case actionTypes.DELETE_ACTIVE_STEP: {
      const newDataflow = {
        ...state[statePartition.objectDataflow],
        steps: state[statePartition.objectDataflow].steps
          .filter((step, index) => index !== state[statePartition.activeStep]),
      };

      return {
        ...state,
        [statePartition.activeStep]: null,
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
