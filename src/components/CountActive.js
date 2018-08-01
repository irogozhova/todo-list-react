import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = state => { 
  return { todos: state.todos };
};

class ConnectedCountActive extends Component { 
  
  render() {

    const numberOfActive = this.props.todos.filter(todo => !todo.isChecked);

    return (
      <span className='count-active'>
        <strong id='active'>{numberOfActive.length} </strong> 
        <span id='item-text'>{numberOfActive.length === 1 ? 'item' : 'items'}</span> 
        {' '} left
      </span>
    );
  }
}

const CountActive = connect(mapStateToProps)(ConnectedCountActive);

export default CountActive;