import React from 'react';

class Item extends React.Component {

  handleCheckbox = () => { //is it the only way to call parent's function through a function inside a child?
    this.props.onCheck(this.props.id, !this.props.isChecked); 
  }

  handleRemove = () => {
    this.props.onRemove(this.props.id);
  }

  render() {
    const { id, isChecked, onCheck, onRemove } = this.props;
    return (
      <li className={this.props.isChecked ? 'completed' : ''}>
        <input 
          type="checkbox"
          className="toggle"
          onClick={() => onCheck(id, isChecked)}/>

        <label>{this.props.label}</label>
        <button className="destroy" onClick={this.handleRemove}></button>
      </li>
    );
  }
}

export default Item;