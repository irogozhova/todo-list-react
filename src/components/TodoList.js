import React from 'react';
import uniqid from 'uniqid';
import classnames from 'classnames';

import ToggleAll from './ToggleAll';
import TodoInput from './TodoInput';
import Item from './Item';
import Footer from './Footer';

const TABALL = 'tab-all';
const TABACTIVE = 'tab-active';
const TABCOMPLETED = 'tab-completed';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    var storageContents = JSON.parse(localStorage.getItem('todos'));
    this.state = {
      todos: storageContents || [], //checks if empty or undefined
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

  clickOnTab = (e) => {
    this.setState(
      { currentTab: e.target.id }
    );
  }

  updateStorage() {
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }
  
  handleKeyPress = (e) => {
    if (e.key === 'Enter' && e.target.value) {
      this.addTodo(e.target.value);
    }
  }

  setAndSaveState = (state) => {
    this.setState(
      state,
      () => this.updateStorage()
    );
  }

  addTodo = (label, isChecked = false) => { //false - default value in case no value was passed
    const id = uniqid();
    setAndSaveState({
      todos: todos.concat({ id, label, isChecked }),
    });
  }

  handleRemoveButton = id =>
    setAndSaveState({
      todos: todos.filter(({id: todoId}) => todoId !== id)
    });

  handleCheck = (id, isChecked) => {
    setAndSaveState({
      todos: todos.map((todo) => {
        const {id: todoId, isChecked, ...rest} = todo;
        if (id === todoId) {
          return { ...rest, isChecked: !isChecked };
        }

        return todo;
      }),
    })
  }

  toggleAll = () => {
    const isAnyChecked = this.state.todos.some(item => item.isChecked);
    if (isAnyChecked) {
      setAndSaveState({
        todos: todos.map(todo => todo.isChecked = true),
      })
    } else {
      setAndSaveState({
        todos: todos.map(todo => todo.isChecked = false),
      })
    }
  }


  countLeftItems = () =>
    this.state.todos.filter(item => !item.isChecked).length;

  checkIfAnyAreChecked = () =>
    this.state.todos.some(item => item.isChecked)

  clearCompleted = () =>
    setAndSaveState({
      todos: this.state.todos.filter(item => !item.isChecked)
    })

  renderItems = () =>
   this.todosFilteredByTab().map((item, i) => (
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
  )

  render () {
    return (
      <div>
        <div className="header">
          <ToggleAll onClick={this.toggleAll}/>
          <TodoInput onKeyPress={this.handleEnterPress} />
        </div>
        <ul className="body">
          {renderItems()}
        </ul>
        <div className={classnames('footer', { hidden: this.state.todos.length })}> 
          <Footer 
            leftItems={this.countLeftItems} 
            tabClick={this.clickOnTab} 
            anyAreChecked={this.checkIfAnyAreChecked} 
            completedClick={this.clearCompleted}
          />
        </div>
      </div>
    )
  } 
}

export default TodoList;