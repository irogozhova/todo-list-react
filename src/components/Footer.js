import React from 'react';
import classnames from 'classnames';

function Footer({
  leftItems,
  tabClick,
  anyAreChecked,
  completedClick
}) {
  return (
    <div>
      <span className="count-active">
        <strong id="active">{leftItems()}</strong> 
        <span id="item-text">{leftItems() === 1} ? 'item' : 'items'}</span>
        left
      </span>
      <ul className="filters">
        <li><a id="tab-all" className="tablink selected" onClick={tabClick}>All</a></li>
        <li><a id="tab-active" className="tablink" onClick={tabClick}>Active</a></li>
        <li><a id="tab-completed" className="tablink" onClick={tabClick}>Completed</a></li>
      </ul>
      <button 
        className={classnames('clear-completed', { hidden: anyAreChecked() })}
        onClick={completedClick}>
        Сlear сompleted
      </button>
    </div>
  );
}

export default Footer;

// const test = () => {
//   var ad = 'hello';
//   return () => console.log(ad);
// };

// const newtest = test();

// newtest();