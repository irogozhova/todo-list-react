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
      e.target.value = '';
    }
  }

  handleRemoveButton = id =>
    this.setAndSaveState({
      todos: this.state.todos.filter(({id: todoId}) => todoId !== id) //what is 'id: todoId'? how does filter work?
    });

  handleCheck = (id, isChecked) => {
    const todos = this.state.todos.map((item) => {
      if (item.id === id) {
        return { id: item.id, label: item.label, isChecked: !isChecked };
      }
      return item;
    });

    this.setAndSaveState({
      todos: todos,
    });
  }

  // handleCheck = (id, isChecked) => {
  //   this.setAndSaveState({
  //     todos: this.state.todos.map((todo) => {
  //       const {id: todoId, isChecked, ...rest} = todo; //what are we doing here?
  //       if (id === todoId) {
  //         return { ...rest, isChecked: !isChecked };
  //       }

  //       return todo;
  //     }),
  //   })
  // }

  toggleAll = () => {
    const everyIsChecked = this.state.todos.every(item => item.isChecked);
    if (everyIsChecked) {
      this.setAndSaveState({
        todos: this.state.todos.map((item) => {
          return { id: item.id, label: item.label, isChecked: !item.isChecked }; //can I use ...rest here?
        })
      })
    }
    else {
      this.setAndSaveState({
        todos: this.state.todos.map((item) => {
          return item.isChecked ? item : {id: item.id, label: item.label , isChecked: !item.isChecked}
        })
      })
    }
  }

  // toggleAll = () => {
  //   const isAnyChecked = this.state.todos.some(item => item.isChecked);
  //   if (isAnyChecked) {
  //     setAndSaveState({
  //       todos: todos.map(todo => todo.isChecked = true), //this stuff doesn't return other object keys
  //     })
  //   } else {
  //     setAndSaveState({
  //       todos: todos.map(todo => todo.isChecked = false),
  //     })
  //   }
  // }

  countLeftItems = () => 
    this.state.todos.filter(item => !item.isChecked).length
  
  checkIfAnyAreChecked = () => 
    this.state.todos.some(item => item.isChecked)

  clearCompleted = () =>
    this.setAndSaveState({
      todos: this.state.todos.filter(item => !item.isChecked)
    })

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
        <div className={classnames('footer-container', { hidden: this.state.todos.length===0 })}> 
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