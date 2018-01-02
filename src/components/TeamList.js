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


//Here the player component gets passed into the TeamList component, the Player takes lots of props. The data of the player, the key to uniquely identify it so that React knows which object it needs to update, and only updates that one. Then the three buttons that the user can interact within it.