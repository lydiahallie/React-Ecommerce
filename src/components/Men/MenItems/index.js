//Dependencies
import React from "react";

//Internals
import PRODUCTS from "../../Data";
import CardList from "../../Cart/CardList";

const MenItems = () => (
	<div className="items">
		{PRODUCTS.map((product) => {
			return (
				product.gender === "men" && (
					<CardList product={product} key={product.id} />
				)
			);
		})}
	</div>
);

export default MenItems;
