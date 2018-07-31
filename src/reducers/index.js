import { ADD_TODO } from "../constants/action-types";
import { REMOVE_TODO } from "../constants/action-types";
import { CHECK_TODO } from "../constants/action-types";

const initialState = {
  todos: []
};

const todoReducer = (state = initialState, action) => { 
  const {type, payload} = action;
  switch (type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, payload] }; 
    case REMOVE_TODO:
      return { ...state, todos: state.todos.filter(todo => todo.id !== action.id) };
    case CHECK_TODO:
      console.log(action.id); 
    default:
      return state;
  }
}

export default todoReducer;