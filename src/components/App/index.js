// Dependencies
import React, { Component } from 'react';
import Cart from '../Cart';
import Products from '../Items';
import './index.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cartProducts: [],
    };
  }

  addItemToCart = (product) => {
    const { cartProducts } = this.state;
    cartProducts.push(product);
    this.setState({ cartProducts });
  }

  render() {
    return(
      <div>
        <Products addItemToCart={this.addItemToCart} />
        <Cart products={this.state.cartProducts} />
      </div>
    );
  }
}

export default App;
