import React from 'react';

function TodoInput(props) {
    return <input className="new-todo" placeholder="What needs to be done?" onKeyPress={props.onKeyPress}></input>;
}

export default TodoInput;