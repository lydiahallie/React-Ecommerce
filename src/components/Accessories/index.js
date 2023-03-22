//Dependencies
import React from "react";
//Internals
import CardList from "../Cart/CardList";
import PRODUCTS from "../Data";
import "./styles.css";

const Accessories = () => {
	return (
		<div className="accessories">
			<div className="accessories-title">
				<h4>Accessories</h4>
			</div>
			<div className="items">
				{PRODUCTS.map(
					(product) =>
						product.category === "accessories" && (
							<CardList product={product} key={product.id} />
						)
				)}
			</div>
		</div>
	);
};

export default Accessories;
