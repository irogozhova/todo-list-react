import { ADD_TODO } from "../constants/action-types";

export const addTodo = todo => ({ 
  type: ADD_TODO, 
  payload: todo
});
