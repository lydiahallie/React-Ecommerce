// Dependencies
import React, { Component } from 'react';
// Externals
import Cart from '../Cart';
import Items from '../Items';
// Internals
import './index.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
    };
  }

  addItemToCart = (item) => {
    const { items } = this.state;
    items.push(item);
    this.setState({ items });
  }

  render() {
    return(
      <div>
        <Items addItemToCart={this.addItemToCart} />
        <Cart items={this.state.items}/>
      </div>
    );
  }
}

export default App;
