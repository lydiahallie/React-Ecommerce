import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PRODUCTS from '../Data';
import {Icon} from 'react-materialize';
import './index.css';

class CartProducts extends Component {
  static propTypes = {
    addItemToCart: PropTypes.func.isRequired,
  };

  addProduct = (product) => {
    this.props.addProductToCart(product);
  }

  getPrice = () => {
    this.props.getTotalPrice()
  }

  render() {
    return(
        <div className="items">
          {PRODUCTS.map((product) => {
            if (product.cart) {
              return(
                <div>{product.name}</div>
              )
            }
          })}
        </div>
    );
  }
}



export default CartProducts;
