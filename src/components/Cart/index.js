import React, { Component } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

class Cart extends Component {
  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  render() {
    return(
      <div className="cart">
        <h1>My Cart</h1>
        <div className="cart-items">
          {map(this.props.products, (product, index) => (
            <div className="cart-item" key={`${product.id}${index}`}>
              <p>{product.name}</p>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Cart;
