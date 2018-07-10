import React from 'react';
import ReactDOM from 'react-dom';

function ToggleAll() {
    return <div className="toggle-all"></div>;
}

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
        if(e.key === 'Enter'){
            console.log('enter pressed');
            this.setState({
                todos: [e.target.value].concat(this.state.todos),
            });
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

class ListContainer extends React.Component {
    render () {
        return (
            <div className="todo">
                <TodoList />
            </div>
        )
    } 
}

ReactDOM.render(
    <ListContainer />,
    document.getElementById('root')
);
