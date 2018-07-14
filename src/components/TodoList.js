import React, { Component } from 'react';
import ToggleAll from './ToggleAll';

function Input(props) {
    return <input onKeyPress={props.onKeyPress}></input>;
}

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }

    //component will mount

    handleEnterPress = (e) => {
        if(e.key === 'Enter' && e.target.value !== '') {
            this.setState({
                todos: this.state.todos.concat(e.target.value)
            }),
            e.target.value = "";
            localStorage.setItem('todos', JSON.stringify(this.state.todos));
        }
    }

    isEmptyStorage = () => {
        return (localStorage.getItem('todos') !== undefined);
    } 

    render () {
       
        const itemsFromStorage = JSON.parse(localStorage.getItem('todos'));
        
        var listItems;
        if (this.isEmptyStorage) {
            listItems = null;
        } else {
            listItems = itemsFromStorage.map((item) =>
            <li key={item}>{item}</li>
            );
        }
        
        return (
            <div>
                <div className="header">
                    <ToggleAll />
                    <Input onKeyPress={this.handleEnterPress} />
                </div>
                <ul className="body">
                    {listItems}
                </ul>
            </div>
        )
    } 
}

export default TodoList;