import { ADD_TODO } from "../constants/action-types";
import { REMOVE_TODO } from "../constants/action-types";

const initialState = {
  todos: []
};

const todoReducer = (state = initialState, action) => { 
  const {type, payload} = action;
  switch (type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, payload] }; 
    case REMOVE_TODO:
      return { ...state, todos: [...state.todos, payload] }; 
    default:
      return state;
  }
}

export default todoReducer;