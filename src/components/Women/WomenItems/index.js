//Dependencies
import React from "react";

//Internals
import PRODUCTS from "../../Data";
import CardList from "../../Cart/CardList";

const WomenItems = () => (
	<div className="items">
		{PRODUCTS.map((product) => {
			return (
				product.gender === "women" && (
					<CardList product={product} key={product.id} />
				)
			);
		})}
	</div>
);

export default WomenItems;
