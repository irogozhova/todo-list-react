import { ADD_TODO } from "../constants/action-types";
import { REMOVE_TODO } from "../constants/action-types";
import { CHECK_TODO } from "../constants/action-types";
import { TOGGLE_ALL } from "../constants/action-types";

export const addTodo = todo => ({ 
  type: ADD_TODO, 
  payload: todo
});

export const removeTodo = id => ({ 
  type: REMOVE_TODO, 
  id: id
});

export const checkTodo = (id, isChecked) => ({ 
  type: CHECK_TODO, 
  id: id,
  isChecked: isChecked
});

export const toggleAll = (id, isChecked) => ({ 
  type: TOGGLE_ALL, 
  id: id,
  isChecked: isChecked
});


