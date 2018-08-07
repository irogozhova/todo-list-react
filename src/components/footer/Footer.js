import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import CountActive from './CountActive';
import Tabs from './Tabs';
import ClearBtn from './ClearBtn';

const mapStateToProps = state => { 
  return { todos: state.todos };
};

class ConnectedFooter extends Component {

  render () {

    const { todos } = this.props;
    const numberOfActive = (todos.filter(todo => !todo.isChecked)).length;
    
    const checkIfAnyChecked = () => {
      return todos.some(todo => todo.isChecked);
    }

    return (
      <div className={classnames('footer', { hidden: todos.length === 0 })}>
        <CountActive numberOfActive={numberOfActive}/>
        <Tabs />
        <ClearBtn anyAreChecked={checkIfAnyChecked()}/>
      </div>
    )
  }
}

const Footer = connect(mapStateToProps)(ConnectedFooter);

export default Footer;