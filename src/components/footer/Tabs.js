import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import classnames from 'classnames';

import { switchTab } from "../../actions/index";
import { TABALL, TABACTIVE, TABCOMPLETED } from "../../constants/tab-names";

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ switchTab: switchTab }, dispatch)
}

class ConnectedTabs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTab: TABALL
    };
  }

  render () {
    
    const currentTab = this.state.currentTab;

    const tabArray = [
      {id: TABALL, name: 'All'}, 
      {id: TABACTIVE, name: 'Active'}, 
      {id: TABCOMPLETED, name: 'Completed'}
    ];

    const tabs = tabArray.map(pair =>
      <li key={pair.id}>
        <a id={pair.id} 
          onClick={() => {
            this.setState({ currentTab: pair.id });
            this.props.switchTab(pair.id);
          }} 
          className={classnames('tablink', { selected: currentTab === pair.id })}
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

const Tabs = connect(null, mapDispatchToProps)(ConnectedTabs);

export default Tabs;