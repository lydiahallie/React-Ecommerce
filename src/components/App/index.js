// Dependencies
import React, { Component } from 'react';
import Cart from '../Cart';
import Products from '../Items';
import map from 'lodash/map';
import './index.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cartProducts: []
    };
  }

  addProductToCart = (product) => {
    const { cartProducts } = this.state;
    cartProducts.push(product);
    this.setState({ cartProducts });
    console.log(cartProducts)
  }

  render() {
    return(
      <div>
        <div className="content">
          <Products addProductToCart={this.addProductToCart} />
        </div>
      </div>
    );
  }
}

export default App;
