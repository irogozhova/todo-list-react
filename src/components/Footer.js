import React from 'react';
import classnames from 'classnames';

function Footer(props) {
  return (
    <div>
      <span className='count-active'>
        <strong id='active'>{props.leftItems()} </strong> 
        <span id='item-text'>{(props.leftItems() === 1) ? 'item' : 'items'}</span> 
        {' '} left
      </span>
      <ul className='filters'>
        {
          [{id: 'tab-all', name: 'All'}, 
          {id: 'tab-active', name: 'Active'}, 
          {id: 'tab-completed', name: 'Completed'}].map(pair =>
            <li key={pair.id}>
              <a id={pair.id} 
                className={classnames('tablink', { selected: props.selectedId === pair.id })} 
                onClick={props.tabClick}>{pair.name}
              </a>
            </li>
          )
        }
      </ul>
      <button 
        className={classnames('clear-completed', { hidden: props.anyAreChecked()===false })} 
        onClick={props.completedClick}>
        Сlear сompleted
      </button>
    </div>
  );
}

export default Footer;