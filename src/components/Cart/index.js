// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Internals
import './index.css';


class Cart extends Component {
  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  render() {
    return(
      <div>
        <h1>My Cart</h1>
        <div className="result-item">
          <h4>{this.props.items}</h4>
        </div>
      </div>
    )
  }
}

export default Cart;
