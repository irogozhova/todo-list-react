import React from 'react';
import { connect } from "react-redux";

import { removeTodo } from "../actions/index";

const mapDispatchToProps = dispatch => {
  return {
    removeTodo: todo => dispatch(removeTodo(todo))
  };
};

class ConnectedItem extends React.Component {

  render() {
    const { id, label, isChecked } = this.props;
    
    return (
      <li id={id}>
        <input 
          type="checkbox" 
          className="toggle" 
        />
        <label>{label}</label>
        <button 
          className="destroy"
          onClick={() => this.props.removeTodo(id)} 
        >
        </button>
      </li>
    );
  }
}

const Item = connect(null, mapDispatchToProps)(ConnectedItem);

export default Item;
