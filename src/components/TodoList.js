import React, { Component } from 'react';
import ToggleAll from './ToggleAll';

function Input(props) {
    return <input onKeyPress={props.onKeyPress}></input>;
}

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        var storageContents = JSON.parse(localStorage.getItem('todos'));
        this.state = {
            todos: (storageContents === null || storageContents.length == 0) ? [] : storageContents
        };
    }

    //component will mount

    handleEnterPress = (e) => {
        if(e.key === 'Enter' && e.target.value !== '') {
            this.setState({
                todos: this.state.todos.concat(e.target.value)
            }, () => localStorage.setItem('todos', JSON.stringify(this.state.todos))),
            e.target.value = "";
        }
    }

    render () {

        var listItems = this.state.todos.map((item) =>
            <li key={item}>{item}</li>
        );
        console.log(listItems);
        
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