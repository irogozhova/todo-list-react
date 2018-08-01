import React from "react";

const CountActive = ({ numberOfActive }) => {

  return (
    <span className='count-active'>
      <strong id='active'>{numberOfActive} </strong> 
      <span id='item-text'>{numberOfActive === 1 ? 'item' : 'items'}</span> 
      {' '} left
    </span>
  );
}

export default CountActive;

