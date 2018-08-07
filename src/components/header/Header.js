import React, { Component } from 'react';

import ToggleAll from './ToggleAll';
import TodoInput from './TodoInput';

class Header extends Component {

  render () {

    return (
      <div className='header'>
        <ToggleAll />
        <TodoInput />
      </div>
    )
  }
}

export default Header;