import React from 'react';

class Footer extends React.Component {

    render() {
        return (
            <div>
                <span className="count-active">
                    <strong id="active"></strong> <span id="item-text">items</span> left
                </span>
                <ul className="filters">
                    <li><a id="tab-all" className="tablink selected">All</a></li>
                    <li><a id="tab-active" className="tablink">Active</a></li>
                    <li><a id="tab-completed" className="tablink">Completed</a></li>
                </ul>
                <button className="clear-completed">Сlear сompleted</button>
            </div>
        );
    }
}

export default Footer;