//Dependencies
import React from "react";
import map from "lodash/map";
//Internals
import PRODUCTS from "../../Data";
import CardList from "../../Cart/CardList";

const AllItems = () => (
	<div className="items">
		{map(PRODUCTS, (product) => (
			<CardList product={product} key={product.id} />
		))}
	</div>
);

export default AllItems;

// <div key={product.id} className="item">
//         <Link to={`/products/${product.id}`}>
//         <div className="product-img">
//           <img alt={product.name} src={product.img} />
//         </div>
//         <div className="product-details">
//           <h1 id="product-name">{product.name}</h1>
//           <h4 id="product-description">{product.description}</h4>
//         </div>
//         </Link>
//         <div className="price-add">
//           <h5 id="product-price">${product.price}</h5>
//           <Icon small id="add-icon">add_shopping_cart</Icon>
//         </div>
//       </div>
