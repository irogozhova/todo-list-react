import React from 'react';
import ToggleAll from './ToggleAll';

function Input(props) {
    return <input className="new-todo" placeholder="What needs to be done?" onKeyPress={props.onKeyPress}></input>;
}

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        var storageContents = JSON.parse(localStorage.getItem('todos'));
        this.state = {
            todos: (storageContents === null) ? [] : storageContents
        };
    }

    //component did mount

    handleEnterPress = (e) => {
        if(e.key === 'Enter' && e.target.value !== '') {
            this.setState(
                { todos: this.state.todos.concat(e.target.value) }, 
                () => localStorage.setItem('todos', JSON.stringify(this.state.todos))
            );
            e.target.value = "";
        }
    }

    render () {

        var listItems = this.state.todos.map((item) =>
            <li key={item}><input type="checkbox" className="toggle"/><label>{item}</label><button className="destroy"></button></li>
        );
        
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