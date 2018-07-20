import React from 'react';

class Item extends React.Component {
  
  render() {
    const { id, label, isChecked, onCheck, onRemove } = this.props;
    return (
      <li className={isChecked ? 'completed' : ''}>
        <input 
          type="checkbox" 
          className="toggle" 
          onClick={() => onCheck(id, isChecked)}
        />
        <label>{label}</label>
        <button 
          className="destroy" 
          onClick={() => onRemove(id)}>
        </button>
      </li>
    );
  }
}

export default Item;