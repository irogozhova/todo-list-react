import { ADD_TODO } from "../constants/action-types";

export const addTodo = todo => ({ //actions only describe what happened
  type: ADD_TODO, 
  payload: todo
});
