import React, { Component } from "react";
import { connect } from "react-redux";

class Tabs extends Component {

  render () {

    const tabArray = [
      {id: 'tab-all', name: 'All'}, 
      {id: 'tab-active', name: 'Active'}, 
      {id: 'tab-completed', name: 'Completed'}
    ];

    const tabs = tabArray.map(pair =>
      <li key={pair.id}>
        <a id={pair.id} 
          className={classnames('tablink', { selected: selectedId === pair.id })} 
          >
          {pair.name}
        </a>
      </li>
    );

    return (

      <ul className='filters'>
        {tabs}
      </ul>
    );
  }
}