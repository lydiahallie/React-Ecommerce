//Dependencies
import React, { Component } from "react";
import { Icon } from "react-materialize";
import { Link } from "react-router-dom";
//Internals
import CardList from "../Cart/CardList";
import PRODUCTS from "../Data";
import "./styles.css";

class Accessories extends Component {
	render() {
		return (
			<div className="accessories">
				<div className="accessories-title">
					<h4>Accessories</h4>
				</div>
				<div className="items">
					{PRODUCTS.map((product) => {
						if (product.category === "accessories") {
							return <CardList product={product} key={product.id} />;
						}
					})}
				</div>
			</div>
		);
	}
}

export default Accessories;
