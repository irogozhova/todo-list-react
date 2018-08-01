import React, { Component } from "react";

import CountActive from './CountActive';
import Tabs from './Tabs';
import ClearBtn from './ClearBtn';

class Footer extends Component {

  render () {

    return (
      <div className="footer">
        <CountActive />
        {/* <Tabs />
        <ClearBtn /> */}
      </div>
    )
  }
}

export default Footer;