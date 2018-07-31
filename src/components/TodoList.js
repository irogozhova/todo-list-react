import React from 'react';

import ToggleAll from './ToggleAll';
import TodoInput from './TodoInput';
import List from './List';


class TodoList extends React.Component {

  render () {
      
    return (
      <div>
        <div className='header'>
          <ToggleAll />
          <TodoInput />
        </div>
        <List />
      </div>
    )
  } 
}

export default TodoList;