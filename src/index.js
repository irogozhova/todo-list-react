import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList';
import { Provider } from "react-redux";
import store from "./store/index";
import { addArticle } from "./actions/index";

window.store = store;
window.addArticle = addArticle;

class App extends React.Component {
  render () {
    return (
      <div className="todo">
        <TodoList />
      </div>
    )
  } 
}

ReactDOM.render( //provider lets react communicate with redux store and gets store as a prop
  <Provider store={store}> 
    <App />
  </Provider>,
  document.getElementById('root')
);
