import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { editTodo } from "../actions/index";

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ editTodo: editTodo }, dispatch)
}

class ConnectedInputEditable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editedValue: this.props.currentValue
    };
  }

  handleChange = (event) => {
    this.setState({
      editedValue: event.target.value
    });
  }

  handleBlur = () => {
    this.props.editTodo(this.props.id, this.state.editedValue);
    this.props.hideInput();
  }

  render() {
    const { id } = this.props;
    const { editedValue } = this.state;

    return (
      <input 
        type="text" 
        className = "label editable"
        id = {id}
        value={editedValue}
        onChange={this.handleChange}
        onBlur = {this.handleBlur}
        />
    );
  }
}

const InputEditable = connect(null, mapDispatchToProps)(ConnectedInputEditable);

export default InputEditable;

