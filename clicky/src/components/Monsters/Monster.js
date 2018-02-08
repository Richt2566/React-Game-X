import React from "react";
import "./Monster.css";

const MonsterCard = props => (
	<div onClick={() => props.setClicked(props.id)} className="monster-card">
		<div className="img-container">
			<img src={props.image} />
		</div>
	</div>
);


export default MonsterCard;