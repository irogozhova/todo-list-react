import React from 'react';
import ReactDOM from 'react-dom';

// const numbers = ["one", "two", "three", "4", "5"];
// const listItems = numbers.map((number) =>
//   <li key={number.toString()}>{number}</li>
// );

function ToggleAll() {
    return <div className="toggle-all"></div>;
}

function Input(props) {
    return <input onKeyPress={props.onKeyPress}></input>;
}

class TypeInBox extends React.Component {

    handleEnterPress = (e) => {
        if(e.key === 'Enter'){
            console.log('enter pressed');
        }
    }

    render() {
        return (
            <div className="header">
                <ToggleAll />
                <Input onKeyPress={this.handleEnterPress} />
            </div>
        )
    }
}

class ListBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }
    
    render () {
        return (
            <ul className="body">
                
            </ul>
        )
    } 
}

class TodoList extends React.Component {
    render () {
        return (
            <div className="todo">
                <TypeInBox />
                <ListBody />
            </div>
        )
    } 
}

ReactDOM.render(
    <TodoList />,
    document.getElementById('root')
);
