import React from 'react';

function TodoInput({onKeyPress}) {
  return <input className="new-todo" placeholder="What needs to be done?" onKeyPress={onKeyPress}></input>;
}

export default TodoInput;