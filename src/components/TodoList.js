import React from 'react';
import ToggleAll from './ToggleAll';
import TodoInput from './TodoInput';
import Checkbox from './Checkbox'

class TodoList extends React.Component {
	constructor(props) {
		super(props);
		var storageContents = JSON.parse(localStorage.getItem('todos'));
		//console.log(storageContents)
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

	render () {
		var listItems = this.state.todos.map((item, i) =>
				{
					return (
					<li key={i} className={item.isChecked ? 'completed' : ''}>
						<Checkbox {...this.state}/>
						<label>{item.label}</label>
						<button className="destroy" onClick={this.handleRemoveButton}></button>
				</li>
					)
				}
				
		);
		/* let labels = this.state.todos.map(item => item.label)
		let checkedValues = this.state.todos.map(item => item.isChecked)
		console.log(checkedValues)
		var listItems = labels.map((item) =>
				<li key={item} className={checkedValues[item] ? 'completed' : ''}>
						<Checkbox {...this.state}/>
						<label>{item}</label>
						<button className="destroy" onClick={this.handleRemoveButton}></button>
				</li>
		); */
			
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