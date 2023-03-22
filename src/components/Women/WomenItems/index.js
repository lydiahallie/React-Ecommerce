//Dependencies
import React from "react";
import { Icon } from "react-materialize";
import { Link } from "react-router-dom";
//Internals
import PRODUCTS from "../../Data";
import ProductCard from "../../Cart/CardList";

const WomenItems = () => (
	<div className="items">
		{PRODUCTS.map((product) => {
			if (product.gender === "women") {
				return <ProductCard product={product} />;
			}
		})}
	</div>
);

export default WomenItems;
