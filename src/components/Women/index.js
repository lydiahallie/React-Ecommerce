import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PRODUCTS from '../Data';
import {Icon} from 'react-materialize';
import './index.css';

class WomensProducts extends Component {
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
      <div className="womens-products">
        <div className="womens-title">
          <h4>Women's Items</h4>
        </div>
        <div className="items">
          {PRODUCTS.map((product) => {
            if (product.gender === "women") {
              return(
                <div className="item">
                  <div className="product-img">
                    <img alt={product.name} src={product.img} />
                  </div>
                  <div className="product-details">
                    <h1 id="product-name">{product.name}</h1>
                    <h4 id="product-description">{product.description}</h4>
                    <div className="price-add">
                      <h5 id="product-price">${product.price}</h5>
                      <Icon small onClick={() => this.addProduct(product)} id="add-icon">add_shopping_cart</Icon>
                    </div>
                  </div>
                </div>
              )
            }
          })}
        </div>
      </div>
    );
  }
}



export default WomensProducts;
