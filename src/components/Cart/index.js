import React, { Component } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
// Internals
import './index.css';


class Cart extends Component {
  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  constructor() {
    super();
    this.state = {
      price: 0
    }
  }

  componentDidMount() {
    this.handleTotalChange()
  }

  handleTotalChange = () => {
    map(this.state.products, (cartProduct,index) => (
      this.setState({
        price: this.state.price + cartProduct.price,
      })
    ))
  }

  render() {
    return(
      <div className="cart">
        <h1>My Cart</h1>
        <div className="cart-items">
          {map(this.props.products, (product, index) => (
            <div className="cart-item" key={`${product.id}${index}`}>
              <p>{product.name}</p>
              <p>{product.price}</p>
              <img src={product.img} className="card-img" />
            </div>
          ))}
        </div>
        <div className="total-price">
          {<h5>Total price: {this.getTotalPrice}</h5>}
        </div>
      </div>
    )
  }
}

export default Cart;
