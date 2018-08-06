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

  componentDidMount(){
    this.nameInput.focus(); 
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

  handleKeyPress = (event) => {
    if (event.key !== 'Enter') {
      return false;
    }
    this.handleBlur();
  }

  render() {

    return (
      <input 
        type="text" 
        className = "label editable"
        id = {this.props.id}
        value={this.state.editedValue}
        onChange={this.handleChange}
        onBlur = {this.handleBlur}
        onKeyPress={this.handleKeyPress}
        ref={(input) => { this.nameInput = input; }} 
        />
    );
  }
}

const InputEditable = connect(null, mapDispatchToProps)(ConnectedInputEditable);

export default InputEditable;

