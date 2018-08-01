import React, { Component } from "react";

import Header from './header/Header';
import List from './List';
import Footer from './footer/Footer';

class TodoList extends Component {

  render () {
      
    return (
      <div>
        <Header />
        <List />
        <Footer />
      </div>
    )
  } 
}

export default TodoList;