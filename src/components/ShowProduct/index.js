import React, { Component } from 'react';
import find from 'lodash/find';
import PRODUCTS from '../Data';
import './index.css';

class ShowProduct extends Component {
  render () {
    const product = find(PRODUCTS, ['id', parseInt(this.props.match.params.id)]);
    return (
      <div className="item-wrapper">
        <div className="col s12 m4 offset-m2">
          <img className="product-image" src={product.img} alt="product" />
        </div>

        <div className="col s12 m6">
          <div className="product-info">
            <h3>{product.name}</h3>
          </div>

          <div className="product-bio">
            <p>{product.description}</p>
            <p>Size: {product.size}</p>
            <p>Price: {product.price}</p>
            <button type="button" className="button cart-button" >Add to cart</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowProduct;
