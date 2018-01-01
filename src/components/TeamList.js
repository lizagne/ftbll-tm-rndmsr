import React from 'react';
import '../css/style.css';
import Player from './Player';

const TeamList = props =>  (
    <div className="col-sm-4">
    	{ props.players.map(player =>
    		<Player 
    			data={ player } 
    			key={ player.id } 
    			editPlayer={ props.editPlayer }
                deletePlayer={ props.deletePlayer } 
                addPlayer={ props.addPlayer } 
            />) }                                               
    </div>
)

export default TeamList;


