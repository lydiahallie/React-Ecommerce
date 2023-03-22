//Dependencies
import React from "react";

//Internals
import PRODUCTS from "../../Data";
import CardList from "../../Cart/CardList";

const ClothesItems = () => (
	<div className="items">
		{PRODUCTS.map((product) => {
			return (
				product.category === "clothes" && (
					<CardList product={product} key={product.id} />
				)
			);
		})}
	</div>
);

export default ClothesItems;
