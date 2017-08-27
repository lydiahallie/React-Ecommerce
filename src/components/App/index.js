import React, { Component } from 'react';
import BaseLayout from '../BaseLayout';
import Items from '../Items';
import Cart from '../Cart';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
    }
  }

  addItemToCart = (item) => {
    const { items } = this.state;
    items.push(item);
    this.setState({items});
  }

  render() {
    return(
      <div>
        <Items addItemToCart = {this.addItemToCart} />
        <Cart items = {this.state.items}/>
      </div>
    )
  }
}

export default App;
