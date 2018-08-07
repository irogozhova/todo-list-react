import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleAll } from '../../actions/index';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleAll: toggleAll }, dispatch)
}

class ConnectedToggleAll extends Component { 

  render() {

    return (
      <div className='toggle-all' onClick={() => this.props.toggleAll()}></div>
    );
  }
}

const ToggleAll = connect(null, mapDispatchToProps)(ConnectedToggleAll);

export default ToggleAll;