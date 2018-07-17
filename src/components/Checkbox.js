import React from 'react';

class Checkbox extends React.Component {

    handleCheckbox = (e) => {
        let checkedItem = e.target.parentElement;
        let checkedItemIndex = Array.from(checkedItem.parentNode.children).indexOf(checkedItem);
        this.props.todos[checkedItemIndex].isChecked = !this.props.todos[checkedItemIndex].isChecked;
        localStorage.setItem('todos', JSON.stringify(this.props.todos));
        this.props.todos[checkedItemIndex].isChecked ? checkedItem.classList.add('completed') : checkedItem.classList.remove('completed'); 
    }

    render() {
        return <input type="checkbox" className="toggle" onClick={this.handleCheckbox}/>;
    }
}

export default Checkbox;