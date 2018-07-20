import React from 'react';
import uniqid from 'uniqid';
import classnames from 'classnames';

import ToggleAll from './ToggleAll';
import TodoInput from './TodoInput';
import Item from './Item'
import Footer from './Footer'

const TABALL = 'tab-all';
const TABACTIVE = 'tab-active';
const TABCOMPLETED = 'tab-completed';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    var storageContents = JSON.parse(localStorage.getItem('todos'));
    this.state = {
      todos: storageContents || [], 
      currentTab: TABALL
    };
  }

  todosFilteredByTab() {
    const {currentTab, todos} = this.state;
    switch (currentTab) {
      case TABALL:
        return todos
      case TABACTIVE:
        return todos.filter(item => !item.isChecked)
      case TABCOMPLETED:
        return todos.filter(item => item.isChecked)
      default:
        throw new Error('Unknown tab name');
    }
  }

  updateStorage() {
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }

  setAndSaveState = (state) => {
    this.setState(
      state,
      () => this.updateStorage()
    );
  }

  addTodo = (label, isChecked = false) => { //false - default value in case no value was passed
    const id = uniqid();
    this.setAndSaveState({
      todos: this.state.todos.concat({ id, label, isChecked }),
    });
  }

  handleKeypress = (e) => {
    if (e.key === 'Enter' && e.target.value) {
      this.addTodo(e.target.value);
    }
  }

  handleRemoveButton = (id) => {
    const todos = [...this.state.todos]; //ES6 spread function
    const removeIndex = todos.findIndex(obj => obj.id === id)
    todos.splice(removeIndex, 1);
    
    this.setState(
      { todos: todos }, 
      () => this.updateStorage()
    );
  }

  handleCheck = (id, isChecked) => {
    const todos = this.state.todos.map((item) => {
      if (item.id === id) {
        return { id: item.id, label: item.label, isChecked: isChecked };
      }
      return item;
    });

    this.setState(
      { todos: todos },
      () => this.updateStorage()
    );
  }

  toggleAll = () => {
    const arrayOfUnchecked = this.state.todos.filter(item => !item.isChecked)
    const temp = this.state.todos.map((item) => {
      if (arrayOfUnchecked.length === 0) {
        return { id: item.id, label: item.label , isChecked: !item.isChecked } 
      }
      else {
        return item.isChecked ? item : {id: item.id, label: item.label , isChecked: !item.isChecked} 
      }
    });

    this.setState(
      { todos: temp },
      () => this.updateStorage()
    );
  }

  countLeftItems = () => {
    const temp = this.state.todos.filter(item => !item.isChecked)
    return temp.length
  }

  checkIfAnyAreChecked = () => {
    return this.state.todos.some(item => item.isChecked)
  }

  clearCompleted = () => {
    const temp = this.state.todos.filter(item => !item.isChecked)
    this.setState(
      { todos: temp },
      () => this.updateStorage()
    );
  }

  clickOnTab = (e) => {
    this.setState(
      { currentTab: e.target.id }
    );
  }

  render () {
    
    var listItems = this.todosFilteredByTab().map((item, i) =>
      {
        return (
          <Item
            key={item.id} 
            id={item.id}
            index={i}
            label={item.label}
            isChecked={item.isChecked}
            onCheck={this.handleCheck}
            onRemove={this.handleRemoveButton}
          />
        )
      }
    );
      
    return (
      <div>
        <div className="header">
          <ToggleAll onClick={this.toggleAll}/>
          <TodoInput onKeyPress={this.handleKeypress} />
        </div>
        <ul className="body">
          {listItems}
        </ul>
        <div className="footer-container" style={{ display: this.state.todos.length===0 ? 'none' : 'block' }}> 
          <Footer 
            leftItems={this.countLeftItems} 
            tabClick={this.clickOnTab} 
            anyAreChecked={this.checkIfAnyAreChecked} 
            completedClick={this.clearCompleted}
            selectedId = {this.state.currentTab}
          />
        </div>
      </div>
    )
  } 
}

export default TodoList;