import React, { Component } from "react";
import { connect } from "react-redux";
import uniqid from 'uniqid';

import { addTodo } from "../actions/index";

const mapDispatchToProps = dispatch => {
  return {
    addTodo: todo => dispatch(addTodo(todo))
  };
};

class ConnectedInput extends Component {

  constructor() {
    super();

    this.state = {
      label: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      label: event.target.value
    });
  }

  handleKeyPress = (event) => {
    if (event.key !== 'Enter') {
      return false;
    }
    const id = uniqid();
    this.props.addTodo({ 
      id,  
      label: this.state.label,
      isChecked: false
    });
    this.setState({label: ''});
  }

  render() {

    return (
      <input
        type="text"
        className="new-todo"
        placeholder="What needs to be done?"
        onKeyPress={this.handleKeyPress}
        onChange={this.handleChange}
        value={this.state.label}
      />
    );
  }
}

const TodoInput = connect(null, mapDispatchToProps)(ConnectedInput);

export default TodoInput;


