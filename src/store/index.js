import { createStore } from "redux";
import todoReducer from "../reducers/index";
import { loadState, saveState } from '../localStorage';

const persistedState = loadState();

const store = createStore(
  todoReducer,
  persistedState
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;