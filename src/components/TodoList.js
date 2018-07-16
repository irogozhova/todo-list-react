import React from 'react';
import ToggleAll from './ToggleAll';
import TodoInput from './TodoInput';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        var storageContents = JSON.parse(localStorage.getItem('todos'));
        this.state = {
            todos: (storageContents === null) ? [] : storageContents
        };
    }

    //maybe put initial state setting from local storage inside the componentWillMount?
    updateStorage() {
        localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }

    handleEnterPress = (e) => {
        if (e.key === 'Enter' && e.target.value !== '') {
            this.setState(
                { todos: this.state.todos.concat(e.target.value) }, 
                () => this.updateStorage()
            );
            e.target.value = "";
        }
    }

    handleRemoveButton = (e) => {
        let removedLabelText = e.target.parentElement.querySelector('label').innerHTML;
        this.setState(
            { todos: this.state.todos.filter(element => element !== removedLabelText) }, 
            () => this.updateStorage()
        );
        //console.log(this.state.todos);
    }

    render () {

        var listItems = this.state.todos.map((item) =>
            <li key={item}>
                <input type="checkbox" className="toggle"/>
                <label>{item}</label>
                <button className="destroy" onClick={this.handleRemoveButton}></button>
            </li>
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