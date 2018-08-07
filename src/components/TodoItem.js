import React, { Component } from 'react';
import { connect } from 'react-redux';

import { removeTodo, checkTodo } from '../actions/index';
import InputEditable from './InputEditable';

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

  handleInputShow = () => {
    this.setState({
      labelClicked: true
    });
  }

  handleInputHide = () => {
    this.setState({
      labelClicked: false
    });
  }

  render() {
    const { id, label, isChecked, checkTodo, removeTodo } = this.props;
    
    return (
      <li id={id} className={isChecked ? 'completed' : ''}>
        {
          this.state.labelClicked ?

          <InputEditable 
            currentValue = {label}
            id = {id}  
            hideInput={this.handleInputHide} />

          :

          <span>
            <input 
              type='checkbox' 
              className='toggle' 
              onClick={() => checkTodo(id, isChecked)}/>
            <div 
              className='label' 
              onDoubleClick={this.handleInputShow}>
              {label}
            </div>
            <button 
              className='destroy'
              onClick={() => removeTodo(id)}>
            </button>
          </span>
        }
      </li>
    );
  }
}

const Item = connect(null, mapDispatchToProps)(ConnectedItem);

export default Item;
