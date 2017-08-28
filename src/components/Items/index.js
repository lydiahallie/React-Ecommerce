import React, { Component } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import PRODUCTS from '../Data';
import './index.css';

class Products extends Component {
  static propTypes = {
    addItemToCart: PropTypes.func.isRequired,
  };

  addProduct = (product) => {
    this.props.addProductToCart(product);
  }

  render() {
    return (
      <div className="items">
        {map(PRODUCTS, (product)=> (
          <div key={product.id} className="item">
            <h1>{product.name}</h1>
            <h4>{product.description}</h4>
            <h5>{product.price}</h5>
            <img alt={product.name} src={product.img} />
            <button onClick={() => this.addProduct(product)}>Add Item to Cart</button>
          </div>
        ))}
      </div>
    );
  }
}

export default Products;
