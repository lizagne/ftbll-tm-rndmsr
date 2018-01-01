import React from 'react';
import '../css/style.css';
import Player from './Player';

const TeamList = props => {
      
    return (
        <div className="col-sm-8">
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
}

export default TeamList;


