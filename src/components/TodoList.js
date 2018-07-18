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
		console.log(this.state.currentTab);
		console.log(this.state.todosView);
		this.changeTabs();
	}

	changeTabs() {
		console.log("changetabs launched")
		const {currentTab, todos} = this.state;
		switch (currentTab) {
			case 'tab-all':
				this.setState({ todosView: todos })
				
				break;
			case 'tab-active':
				this.setState({ todosView: todos.filter(item => !item.isChecked)})
				console.log("current is tab-active")
				break;
			case 'tab-completed':
				this.setState({ todosView: todos.filter(item => item.isChecked)})
				break;
			default:
				throw 'Unknown tab name';
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

	render () {
		//console.log(this.state.todosView)
		var listItems = this.state.todosView.map((item, i) =>
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
				<div className="footer">
					<Footer leftItems={this.countLeftItems} tabClick={this.clickOnTab}/>
				</div>
			</div>
		)
	} 
}

export default TodoList;