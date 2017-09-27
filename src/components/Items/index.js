//Dependencies
import React, { Component } from 'react';
//Internals
import AllItems from './AllItems';
import './index.css';

class Products extends Component {
  render() {
    return (
      <div className="items-wrapper">
        <div className="items-title">
          <h4>All Items</h4>
        </div>
        <AllItems />
      </div>
    );
  }
}

export default Products;
