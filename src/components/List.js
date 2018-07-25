import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => { //get 'state' props which are stored in reducer
  return { todos: state.todos };
};

const ConnectedList = ({ todos }) => { //functional component

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
  
  const todoItems = todos.map(createItems);
  
  //this is a worse alternative to  previous 5 lines combined
  // const todoItems = todos.map((el) =>
  //   <TodoItem key={el.id} id={el.id} label={el.label} isChecked={el.isChecked}/>
  // );  

  return (
    <ul className="body">
      {todoItems}
    </ul>
  );
  
}

const List = connect(mapStateToProps)(ConnectedList);

export default List;

