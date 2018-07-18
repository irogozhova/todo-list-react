import React from 'react';

function Footer(props) {
    return (
        <div>
            <span className="count-active">
                <strong id="active">{props.leftItems()} </strong> 
                <span id="item-text">{(props.leftItems() === 1) ? 'item' : 'items'}</span> left
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

export default Footer;