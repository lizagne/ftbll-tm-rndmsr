import React from 'react';
// import xBtn from "../images/xbutton.svg";
import XButton from "./XButton";

const PlayerList = ({ playerList }) => (
	<div>
		{ playerList.map((player, i) => 
			<XButton 
				key={ i } 
				id={ i }
			>{ player }</XButton>
		)}
	</div>
);

export default PlayerList;