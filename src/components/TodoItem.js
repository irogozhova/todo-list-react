import React, { Component } from "react";
import { connect } from "react-redux";

import { removeTodo, checkTodo } from "../actions/index";
import InputEditable from "./InputEditable";

const mapDispatchToProps = dispatch => {
  return {
    removeTodo: todo => dispatch(removeTodo(todo)),
    checkTodo: todo => dispatch(checkTodo(todo))
  };
};

class ConnectedItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      labelClicked: false
    };
  }

  handleShowInputEditable = (event) => {
    this.setState({
      labelClicked: true
    });
  }

  handleHideInputEditable = () => {
    this.setState({
      labelClicked: false
    });
  }

  render() {
    const { id, label, isChecked } = this.props;
    
    return (
      <li id={id} className={isChecked ? 'completed' : ''}>
        {
          this.state.labelClicked ?

          <InputEditable 
            currentValue = {label}
            id = {id}  
            hideInput={this.handleHideInputEditable} />

          :

          <span>
            <input 
              type="checkbox" 
              className="toggle" 
              onClick={() => this.props.checkTodo(id, isChecked)}/>
            <div 
              className="label" 
              onDoubleClick={this.handleShowInputEditable}>
              {label}
            </div>
            <button 
              className="destroy"
              onClick={() => this.props.removeTodo(id)}>
            </button>
          </span>
        }
      </li>
    );
  }
}

const Item = connect(null, mapDispatchToProps)(ConnectedItem);

export default Item;
