import { ADD_TODO } from "../constants/action-types";

const initialState = {
  todos: []
};

const todoReducer = (state = initialState, action) => { //describes how the state changes in response to actions
  const {type, payload} = action;
  switch (type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, payload] }; //concats payload to state.todos
    default:
      return state;
  }
}

export default todoReducer;