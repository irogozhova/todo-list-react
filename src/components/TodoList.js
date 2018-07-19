import React from 'react';
import ToggleAll from './ToggleAll';
import TodoInput from './TodoInput';
import Item from './Item'
import Footer from './Footer'

class TodoList extends React.Component {
	constructor(props) {
		super(props);
		var storageContents = JSON.parse(localStorage.getItem('todos'));
		this.state = {
			todos: (storageContents === null) ? [] : storageContents,
			todosView: [],
			currentTab: 'tab-all'
		};
	}

	componentWillMount() {
		this.changeTabs();
	}

	changeTabs() {
		console.log("!!!!");
		const {currentTab} = this.state;
		switch (currentTab) {
			case 'tab-all':
				this.setState({ todosView: this.state.todos })
				break;
			case 'tab-active':
				this.setState({ todosView: this.state.todos.filter(item => !item.isChecked)})
				break;
			case 'tab-completed':
				this.setState({ todosView: this.state.todos.filter(item => item.isChecked)})
				break;
			default:
				throw new Error('Unknown tab name');
		}
	}

	clickOnTab = (e) => {
		const tabs = document.getElementsByClassName("tablink");
		for (var i=0; i < tabs.length; i++) {
			tabs[i].classList.remove('selected');
		}
		e.target.classList.add('selected');
		this.setState(
			{ currentTab: e.target.id }
		);
		this.changeTabs();
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

	handleRemoveButton = (index) => {
		const todos = [...this.state.todos]; //ES6 spread function
		todos.splice(index, 1);
		
		this.setState(
			{ todos: todos }, 
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

	toggleAll = () => {
		const arrayOfUnchecked = this.state.todos.filter(item => !item.isChecked)
		const temp = this.state.todos.map((item) => {
			if (arrayOfUnchecked.length === 0) {
				return { label: item.label , isChecked: !item.isChecked } 
			}
			else {
				return item.isChecked ? item : {label: item.label , isChecked: !item.isChecked} 
			}
		});

		this.setState(
			{ todos: temp },
			() => this.updateStorage()
		);
	}

	countLeftItems = () => {
		const temp = this.state.todos.filter(item => !item.isChecked)
		return temp.length
	}

	checkIfAnyAreChecked = () => {
		return this.state.todos.some(item => item.isChecked)
	}

	clearCompleted = () => {
		const temp = this.state.todos.filter(item => !item.isChecked)
		this.setState(
			{ todos: temp },
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
						onRemove={this.handleRemoveButton}
					/>
				)
			}
		);
			
		return (
			<div>
				<div className="header">
					<ToggleAll onClick={this.toggleAll}/>
					<TodoInput onKeyPress={this.handleEnterPress} />
				</div>
				<ul className="body">
					{listItems}
				</ul>
				<div className="footer" style={{ display: listItems.length===0 ? 'none' : 'block' }}> 
					<Footer leftItems={this.countLeftItems} tabClick={this.clickOnTab} anyAreChecked={this.checkIfAnyAreChecked} completedClick={this.clearCompleted}/>
				</div>
			</div>
		)
	} 
}

export default TodoList;