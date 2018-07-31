import { ADD_TODO } from "../constants/action-types";
import { REMOVE_TODO } from "../constants/action-types";

export const addTodo = todo => ({ 
  type: ADD_TODO, 
  payload: todo
});

export const removeTodo = id => ({ 
  type: REMOVE_TODO, 
  id: id
});
