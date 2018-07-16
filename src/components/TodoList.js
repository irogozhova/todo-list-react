import React from 'react';
import ToggleAll from './ToggleAll';
import TodoInput from './TodoInput';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        // var storageContents = JSON.parse(localStorage.getItem('todos'));
        // this.state = {
        //     todos: (storageContents === null) ? [] : storageContents
        // };
        this.state = { todos: undefined };
    }

    //maybe put initial state setting from local storage inside the componentWillMount?
    componentWillMount() {
        let storageContents = JSON.parse(localStorage.getItem('todos'));
        let todos;
        if (storageContents === null) {
            todos = [];
        } 
        else {
            todos = storageContents;
        }
        this.setState({ todos });
    }

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
                    <TodoInput onKeyPress={this.handleEnterPress} />
                </div>
                <ul className="body">
                    {listItems}
                </ul>
            </div>
        )
    } 
}

export default TodoList;