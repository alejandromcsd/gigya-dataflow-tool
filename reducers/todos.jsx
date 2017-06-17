/*
export const actionTypes = {
  ADD_TODO: 'ADD_TODO',
  DELETE_TODO: 'DELETE_TODO',
  EDIT_TODO: 'EDIT_TODO',
  COMPLETE_TODO: 'COMPLETE_TODO',
  COMPLETE_ALL: 'COMPLETE_ALL',
  CLEAR_COMPLETED: 'CLEAR_COMPLETED'
};

export const statePartition = {
  text: 'text',
  completed: 'completed',
  id: 'id'
};

const initialState = [{
  [statePartition.text]: 'Use Redux',
  [statePartition.completed]: false,
  [statePartition.id]: 0
}];

export default function todos(state = initialState, action) {
  switch (action.type) {
  case actionTypes.ADD_TODO:
    return [{
      [statePartition.id]: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
      [statePartition.completed]: false,
      text: action.text
    }, ...state];

  case actionTypes.DELETE_TODO:
    return state.filter(todo =>
      todo.id !== action.id
    );

  case actionTypes.EDIT_TODO:
    return state.map(todo =>
      todo.id === action.id ?
        Object.assign({}, todo, { text: action.text }) :
        todo
    );

  case actionTypes.COMPLETE_TODO:
    return state.map(todo =>
      todo.id === action.id ?
        Object.assign({}, todo, { completed: !todo.completed }) :
        todo
    );

  case actionTypes.COMPLETE_ALL:
    const areAllMarked = state.every(todo => todo.completed);
    return state.map(todo => Object.assign({}, todo, {
      completed: !areAllMarked
    }));

  case actionTypes.CLEAR_COMPLETED:
    return state.filter(todo => todo.completed === false);

  default:
    return state;
  }
}

*/
