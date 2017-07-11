import blank from '../templates/blank';
import { BeautifyJson, EnsureUniqueId } from '../lib/json';
import reArrange from '../lib/array';

export const actionTypes = {
  UPDATE: 'UPDATE',
  UPDATE_STEP: 'UPDATE_STEP',
  MOVEUP_STEP: 'MOVEUP_STEP',
  MOVEDOWN_STEP: 'MOVEDOWN_STEP',
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
      const stepIndex = action.payload.stepIndex !== undefined
        ? action.payload.stepIndex : state[statePartition.activeStep];

      const newDataflow = {
        ...state[statePartition.objectDataflow],
        steps: state[statePartition.objectDataflow].steps.map((step, index) => {
          if (index !== stepIndex) {
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

      if (newDataflow.steps.length > 1) {
        newDataflow.steps[newDataflow.steps.length - 2].next = [action.template.id];
      }

      return {
        ...state,
        [statePartition.objectDataflow]: newDataflow,
        [statePartition.stringDataflow]: BeautifyJson(newDataflow),
      };
    }
    case actionTypes.DELETE_ACTIVE_STEP: {
      const activeIndex = state[statePartition.activeStep];
      const newDataflow = {
        ...state[statePartition.objectDataflow],
        steps: state[statePartition.objectDataflow].steps
          .filter((step, index) => index !== activeIndex),
      };

      const replacedByStep = newDataflow.steps[activeIndex];
      if (activeIndex > 0 && replacedByStep) {
        // Update NEXT for top step
        newDataflow.steps[activeIndex - 1].next = [replacedByStep.id];
      }

      if (newDataflow.steps.length) {
        delete newDataflow.steps[newDataflow.steps.length - 1].next;
      }

      return {
        ...state,
        [statePartition.activeStep]: null,
        [statePartition.objectDataflow]: newDataflow,
        [statePartition.stringDataflow]: BeautifyJson(newDataflow),
      };
    }
    case actionTypes.MOVEUP_STEP: {
      const stepIndex = state[statePartition.activeStep];

      let sortedSteps = [...state[statePartition.objectDataflow].steps];
      // Always update NEXT for current step
      sortedSteps[stepIndex].next = [sortedSteps[stepIndex - 1].id];

      // Only update NEXT of bottom / top elements if exist
      if (stepIndex > 1) {
        sortedSteps[stepIndex - 2].next = [sortedSteps[stepIndex].id];
      }
      if (stepIndex < sortedSteps.length - 1) {
        sortedSteps[stepIndex - 1].next = [sortedSteps[stepIndex + 1].id];
      }

      sortedSteps = reArrange(sortedSteps, stepIndex, stepIndex - 1);
      delete sortedSteps[sortedSteps.length - 1].next;

      const newDataflow = {
        ...state[statePartition.objectDataflow],
        steps: sortedSteps,
      };

      return {
        ...state,
        [statePartition.activeStep]: stepIndex - 1,
        [statePartition.objectDataflow]: newDataflow,
        [statePartition.stringDataflow]: BeautifyJson(newDataflow),
      };
    }
    case actionTypes.MOVEDOWN_STEP: {
      const stepIndex = state[statePartition.activeStep];

      let sortedSteps = [...state[statePartition.objectDataflow].steps];
      // Always update NEXT for bottom step
      sortedSteps[stepIndex + 1].next = [sortedSteps[stepIndex].id];

      // Only update NEXT of current and top elements if exist
      if (stepIndex < sortedSteps.length - 2) {
        sortedSteps[stepIndex].next = [sortedSteps[stepIndex + 2].id];
      }
      if (stepIndex > 0) {
        sortedSteps[stepIndex - 1].next = [sortedSteps[stepIndex + 1].id];
      }

      sortedSteps = reArrange(sortedSteps, stepIndex, stepIndex + 1);
      delete sortedSteps[sortedSteps.length - 1].next;

      const newDataflow = {
        ...state[statePartition.objectDataflow],
        steps: sortedSteps,
      };

      return {
        ...state,
        [statePartition.activeStep]: stepIndex + 1,
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
