import React from 'react';

class Item extends React.Component {
  
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
        >
        </button>
      </li>
    );
  }
}

export default Item;