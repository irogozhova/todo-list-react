import React from 'react';
import ToggleAll from './ToggleAll';
import TodoInput from './TodoInput';
import Item from './Item'

class TodoList extends React.Component {
	constructor(props) {
		super(props);
		var storageContents = JSON.parse(localStorage.getItem('todos'));
		this.state = {
			todos: (storageContents === null) ? [] : storageContents
		};
	}

	updateStorage() {
		localStorage.setItem('todos', JSON.stringify(this.state.todos));
	}
	
	handleEnterPress = (e) => {
		if (e.key === 'Enter' && e.target.value !== '') {
			let newAddedObject = {label: e.target.value, isChecked: false}
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

	handleCheck = (index, isChecked) => {
		const todos = this.state.todos.map((item, i) => {
			if (i === index) {
				return { label: item.label, isChecked: isChecked };
			}
			return item;
		});

		this.setState(
			{ todos: todos },
			() => this.updateStorage()
		);
	}

	render () {
		var listItems = this.state.todos.map((item, i) =>
			{
				return (
					<Item
						key={i} 
						index={i}
						label={item.label}
						isChecked={item.isChecked}
						onCheck={this.handleCheck}
					/>
				)
			}
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