import React from 'react';
import classnames from 'classnames';

function Footer({
  leftItems,
  tabClick,
  anyAreChecked,
  completedClick,
  selectedId
}) {
  return (
    <div>
      <span className='count-active'>
        <strong id='active'>{leftItems()} </strong> 
        <span id='item-text'>{leftItems() === 1 ? 'item' : 'items'}</span> 
        {' '} left
      </span>
      <ul className='filters'>
        {
          [{id: 'tab-all', name: 'All'}, 
          {id: 'tab-active', name: 'Active'}, 
          {id: 'tab-completed', name: 'Completed'}].map(pair =>
            <li key={pair.id}>
              <a id={pair.id} 
                className={classnames('tablink', { selected: selectedId === pair.id })} 
                onClick={tabClick}>
                {pair.name}
              </a>
            </li>
          )
        }
      </ul>
      <button 
        className={classnames('clear-completed', { hidden: anyAreChecked()===false })} 
        onClick={completedClick}>
        Сlear сompleted
      </button>
    </div>
  );
}

export default Footer;