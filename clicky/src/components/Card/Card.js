import React from "react";
import "./Card.css";

const Card = props => (
	<div onClick={() => props.setClicked(props.id)} className="card">
		<div className="img-container">
			<img src={props.image} />
		</div>
	</div>
);


export default Card;