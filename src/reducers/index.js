import { 
  ADD_TODO, 
  REMOVE_TODO, 
  CHECK_TODO, 
  TOGGLE_ALL, 
  CLEAR_COMPLETED,
  SWITCH_TAB
} from "../constants/action-types";

import { TABALL } from "../constants/tab-names";

const initialState = {
  todos: [],
  filter: TABALL
};

const todoReducer = (state = initialState, action) => { 
  const {type, payload} = action;
  switch (type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, payload] }; 
    case REMOVE_TODO:
      return { ...state, todos: state.todos.filter(todo => todo.id !== action.id) };
    case CHECK_TODO:
      return { ...state, todos: state.todos.map(todo => {
        // const {id, isChecked, ...rest} = todo; //const id = todo.id, const isChecked = todo.isChecked
        const {id, isChecked} = todo;
        if (id === action.id) {
          //return { ...rest, isChecked: !isChecked };
          return {
            ...todo,
            isChecked: !isChecked
          }
        }
        return todo
      }) };
    case TOGGLE_ALL:
      const everyIsChecked = state.todos.every(todo => todo.isChecked);
      return { ...state, todos: state.todos.map(todo => {
        const {isChecked} = todo;
        if (everyIsChecked) {
          return {
            ...todo,
            isChecked: !isChecked
          }
        }
        else {
          return todo.isChecked ? todo : {...todo, isChecked: !isChecked}
        }
      }) }; 
    case CLEAR_COMPLETED:
      return { ...state, todos: state.todos.filter(todo => !todo.isChecked) };
    case SWITCH_TAB:
      return { ...state, filter: action.id };
    default:
      return state;
  }
}

export default todoReducer;