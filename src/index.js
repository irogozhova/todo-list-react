import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/index';
import { addTodo } from './actions/index';
import TodoList from './components/TodoList';
import './styles.css';

window.store = store;
window.addTodo = addTodo;

class App extends React.Component {
  render () {
    return (
      <div className='todo'>
        <TodoList />
      </div>
    )
  } 
}

ReactDOM.render( // provider lets react communicate with redux store and gets store as a prop
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
