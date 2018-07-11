import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/todo_list';


class App extends React.Component {
    render () {
        return (
            <div className="todo">
                <TodoList />
            </div>
        )
    } 
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
