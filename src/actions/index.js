import { 
  ADD_TODO, 
  REMOVE_TODO, 
  CHECK_TODO,
  EDIT_TODO, 
  TOGGLE_ALL, 
  CLEAR_COMPLETED, 
  SWITCH_TAB 
} from "../constants/action-types";

export const addTodo = todo => ({ 
  type: ADD_TODO, 
  payload: todo
});

export const checkTodo = (id, isChecked) => ({ 
  type: CHECK_TODO, 
  id: id,
  isChecked: isChecked
});

export const editTodo = (id, newValue) => ({ 
  type: EDIT_TODO, 
  id: id,
  newValue: newValue
});

export const removeTodo = id => ({ 
  type: REMOVE_TODO, 
  id: id
});

export const toggleAll = isChecked => ({ 
  type: TOGGLE_ALL, 
  isChecked: isChecked
});

export const clearCompleted = isChecked => ({ 
  type: CLEAR_COMPLETED, 
  isChecked: isChecked
});

export const switchTab = id => ({ 
  type: SWITCH_TAB, 
  id: id
});



