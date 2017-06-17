export const actionTypes = {
  NOTIFY: 'NOTIFY',
  NOTIFY_COMPLETED: 'NOTIFY_COMPLETED',
};

export const statePartition = {
  partition: 'notification',
  message: 'message',
};

const initialState = {
  [statePartition.message]: '',
};

export default function notification(state = initialState, action) {
  switch (action.type) {
    case actionTypes.NOTIFY:
      return {
        [statePartition.message]: action.message,
      };
    case actionTypes.NOTIFY_COMPLETED:
      return {
        [statePartition.message]: '',
      };
    default:
      return state;
  }
}
