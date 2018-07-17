import React from 'react';

class Checkbox extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         checked: false
    //     };
    // }

    handleCheckbox = (e) => {
        //this.setState({checked: !this.state.checked})
        let checkedItem = e.target.parentElement;
        let checkedItemIndex = Array.from(checkedItem.parentNode.children).indexOf(checkedItem);
        console.log(this.props.todos[checkedItemIndex]);
        //this.props.todos[checkedItemIndex].isChecked = !this.props.todos[checkedItemIndex].isChecked;
        //this.props.todos
        //e.target.parentElement.classList.toggle('completed');
    }

    render() {
        return <input type="checkbox" className="toggle" onClick={this.handleCheckbox}/>;
    }
}

export default Checkbox;