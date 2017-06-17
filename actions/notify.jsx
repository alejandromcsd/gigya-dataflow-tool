import { actionTypes } from '../reducers/notification';

export function notify(message) {
  return { type: actionTypes.NOTIFY, message };
}
export function notifyCompleted() {
  return { type: actionTypes.NOTIFY_COMPLETED };
}
