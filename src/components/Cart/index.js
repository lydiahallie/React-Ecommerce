import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PRODUCTS from '../Data';
import map from 'lodash/map';
import {Icon} from 'react-materialize';
import './index.css';

class CartProducts extends Component {
  static propTypes = {
    addItemToCart: PropTypes.func.isRequired,
  };


  render() {
    console.log(this.props.cartProducts)
    return(
      <div>
        <h1>This is the cart</h1>
          <div className="items">
            {map(this.props.cartProducts, (product) => {
              console.log(this.props.cartProducts);
              <h1>{product.name}</h1>
            })}
          </div>
      </div>
    );
  }
}



export default CartProducts;
