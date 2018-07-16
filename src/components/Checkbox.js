import React from 'react';

class Checkbox extends React.Component {

    handleCheckbox = (e) => {
        e.target.parentElement.classList.toggle('completed');
    }

    render() {
      return <input type="checkbox" className="toggle" onClick={this.handleCheckbox}/>;
    }
}

export default Checkbox;