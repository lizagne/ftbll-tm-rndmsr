import * as constants from '../data/Constants';
import _ from 'lodash';

export const addPlayerActionCreator = player => ({
    type: constants.ADD_PLAYER,
    payload: player
});

export const editPlayerActionCreator = player => ({
    type: constants.EDIT_PLAYER,
    payload: player
});

export const deletePlayerCreator = player => ({
    type: constants.DELETE_PLAYER,
    payload: player
});

export const reset = () => ({
    type: constants.RESET
});

const balanceTeamsActionCreator = () => ({
    type: constants.BALANCE_TEAMS
});

//set up the random generator code: 
// TODO: Try to use the shuffle method from lodash!
export const generateTeamActionCreator = () => {

    return (dispatch, getState) => { 

    //using slice as it creates a new array    
    const players = getState().players.slice();
        
        let teamSize = players.length / 2;
        let teamA = [];
        let teamB = [];

        // randomise teams
        for (let i = players.length - 1; i > 0; i-=1) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = players[i];
            players[i] = players[j];
            players[j] = temp; 
        }

        teamA = players.slice(0, teamSize);
        teamB = players.slice(teamSize, players.length);
    
        dispatch({
            type: constants.GENERATE_TEAM,
            payload: {
                teamA,
                teamB
            }
        });
    }
};
