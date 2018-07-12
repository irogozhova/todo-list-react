import React, { Component } from 'react';
import ToggleAll from './toggle_all';

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

    handleEnterPress = (e) => {
        if(e.key === 'Enter' && e.target.value !== '') {
            this.setState({
                todos: this.state.todos.concat([e.target.value])
            });
            e.target.value = "";
        }
    }

    render () {
        const listItems = this.state.todos.map((item) =>
            <li key={item}>{item}</li>
        )

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