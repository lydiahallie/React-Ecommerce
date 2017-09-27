//Dependencies
import React from 'react';
import { Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
//Internals
import PRODUCTS from '../../Data';

const ClothesItems = () => (
  <div className="items">
    {PRODUCTS.map((product) => {
      if (product.category === "clothes") {
        return(
          <div className="item">
            <Link to={`/products/${product.id}`}>
            <div className="product-img">
              <img alt={product.name} src={product.img} />
            </div>
            <div className="product-details">
              <h1 id="product-name">{product.name}</h1>
              <h4 id="product-description">{product.description}</h4>
            </div>
            </Link>
            <div className="price-add">
              <h5 id="product-price">${product.price}</h5>
              <Icon small onClick={() => this.addProduct(product)} id="add-icon">add_shopping_cart</Icon>
            </div>
          </div>
        )
      }
    })}
  </div>
)

export default ClothesItems;
