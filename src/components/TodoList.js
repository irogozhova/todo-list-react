import React from 'react';

import TodoInput from './TodoInput';
import List from './List';


class TodoList extends React.Component {

  render () {
      
    return (
      <div>
        <TodoInput />
        <List />
      </div>
    )
  } 
}

export default TodoList;