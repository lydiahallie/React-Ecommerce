// Dependencies
import React, { Component, PropTypes } from 'react';
import { NavLink, Link } from 'react-router-dom';
import map from 'lodash/map';
// Externals
import products from "../Data/index.js";
// Internals
import './index.css';


class Items extends Component {
  static propTypes = {
    addItemToCart: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      decription: '',
      price: 0,
      img: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addItemToCart(this.state);
    this.setState({
      name: {product.name},
      description: {product.description},
      price: {product.price},
      img: {product.img}
    })
  }

  render() {
    return (
      <div className="items">
        {map(products, (product)=> (
          <div key={product.id} className={product.name}>
            <form onSubmit={this.handleSubmit}>
              <NavLink activeClassName="selected" className="navlink" to={`/${product.name}`}>
                <h1>{product.name}</h1>
                <h4>{product.description}</h4>
                <h5>{product.price}</h5>
                <img src={product.img} alt={product.name} />
              </NavLink>
              <button type="submit">Add Item to Cart</button>
            </form>
          </div>
        ))}
      </div>
    );
  }
}

export default Items;
