import React, { Component } from "react";
import { connect } from "react-redux";
import classnames from 'classnames';

import CountActive from './CountActive';
import Tabs from './Tabs';
import ClearBtn from './ClearBtn';

const mapStateToProps = state => { 
  return { todos: state.todos };
};

class ConnectedFooter extends Component {

  render () {

    const activeTodos = this.props.todos.filter(todo => !todo.isChecked);
    const numberOfActive = activeTodos.length;

    return (
      <div className={classnames('footer', { hidden: this.props.todos.length===0 })}>
        <CountActive numberOfActive={numberOfActive}/>
        <Tabs />
        <ClearBtn />
      </div>
    )
  }
}

const Footer = connect(mapStateToProps)(ConnectedFooter);

export default Footer;