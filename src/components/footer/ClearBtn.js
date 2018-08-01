import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import classnames from 'classnames';

import { clearCompleted } from "../../actions/index";

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ clearCompleted: clearCompleted }, dispatch)
}

class ConnectedClearBtn extends Component {

  render () {

    return (
      <button 
        className={classnames('clear-completed', { hidden: this.props.anyAreChecked===false })} 
        onClick={() => this.props.clearCompleted()}>
        Сlear сompleted
      </button>
    );
  }
}

const ClearBtn = connect(null, mapDispatchToProps)(ConnectedClearBtn);

export default ClearBtn;