import React, { Component } from "react";

import ToggleAll from './ToggleAll';
import TodoInput from './TodoInput';
import List from './List';
import CountActive from './CountActive';
// import Tabs from './Tabs';
// import ClearBtn from './ClearBtn';

class TodoList extends Component {

  render () {
      
    return (
      <div>
        <div className='header'>
          <ToggleAll />
          <TodoInput />
        </div>
        <List />
        <div className='footer'>
          <CountActive />
          {/* <Tabs />
          <ClearBtn /> */}
        </div>
      </div>
    )
  } 
}

export default TodoList;