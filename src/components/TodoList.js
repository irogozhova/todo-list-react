import React from 'react';
import ToggleAll from './ToggleAll';
import TodoInput from './TodoInput';
import Checkbox from './Checkbox'

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
        if (e.key === 'Enter' && e.target.valtodosue !== '') {
            let newAddedObject = {label: e.target.value, checked: false}
            this.setState(
                { todos: this.state.todos.concat([newAddedObject]) },
                () => this.updateStorage()
            );
            e.target.value = "";
        }
    }

    handleRemoveButton = (e) => {
        let removedItem = e.target.parentElement;
        let removedItemIndex = Array.from(removedItem.parentNode.children).indexOf(removedItem);
        let newArray = (this.state.todos.slice(0,removedItemIndex).concat(this.state.todos.slice(removedItemIndex+1))); //shorter & more beautiful way to do it?
        this.setState(
            { todos: newArray }, 
            () => this.updateStorage()
        );
    }

    render () {
        let labels = this.state.todos.map(item => item.label)
        var listItems = labels.map((item) =>
            <li key={item}>
                <Checkbox {...this.state} />
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