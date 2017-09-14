// Dependencies
import React, { Component } from 'react';
import Cart from '../Cart';
import Products from '../Items';
import map from 'lodash/map';
import './index.css';

class App extends Component {
  render() {
    return(
      <div>
        <div className="content">
          <Products />
        </div>
      </div>
    );
  }
}

export default App;
