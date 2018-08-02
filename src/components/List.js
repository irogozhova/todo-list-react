import React from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem"
import { TABALL, TABACTIVE, TABCOMPLETED } from "../constants/tab-names";

const mapStateToProps = state => { 
  return { 
    todos: state.todos,
    filter: state.filter 
  };
};

const ConnectedList = ({ todos, filter }) => { 

  const createItems = (el) => {
    return (
      <TodoItem 
        key={el.id} 
        id={el.id} 
        label={el.label} 
        isChecked={el.isChecked}
      />
    );
  }

  const filterItems = () => {
    if (filter === TABALL)
    switch (filter) {
      case TABALL:
        return todos
      case TABACTIVE:
        return todo => !todo.isChecked
      case TABCOMPLETED:
        return todo => todo.isChecked
      default:
        throw new Error('Unknown tab name');
    }
  }
  
  const todoItems = todos.filter(filterItems).map(createItems); 

  return (
    <ul className="body">
      {todoItems}
    </ul>
  );
}

const List = connect(mapStateToProps)(ConnectedList);

export default List;

