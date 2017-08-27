import React, { Component } from 'react';
import BaseLayout from '../BaseLayout';

class App extends Component {
  render() {
    return(
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default App;
