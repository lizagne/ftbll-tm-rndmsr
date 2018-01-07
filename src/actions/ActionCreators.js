import * as constants from '../data/Constants';

// not using either of these in the app, but would like to in the future:
// import _ from 'lodash';
// import { Map, List } from 'immutable';

//set up add player action creator
export const addPlayerActionCreator = player => ({
    type: constants.ADD_PLAYER,
    payload: player
});

//set up edit player Action creator
export const editPlayerActionCreator = player => ({
    type: constants.EDIT_PLAYER,
    payload: player
});

//set up the delete individual player action creator
export const deletePlayerActionCreator = player => ({
    type: constants.DELETE_PLAYER,
    payload: player
});

//set up the clear or reset names action creator
export const reset = () => ({
    type: constants.RESET
});

// I would like to continue with Balance Team action creator in the future
// export const balanceTeamsActionCreator = () => ({
//     type: constants.BALANCE_TEAMS
// });

export const updateName = id => ({
    type: constants.UPDATE_NAME,
    payload: id

});

//set up the random generator code: 
// TODO: Try to use the shuffle method from lodash!
export const generateTeamActionCreator = () => {

    return (dispatch, getState) => { 

    //using slice as it creates a new array    
    const players = getState().players.slice();
        
        let teamSize = players.length / 2; //first take the inputs and divide by 2
        let teamA = []; //set up empty arrays for both teams
        let teamB = [];

        // randomise teams
        // try to refactor this for loop
        for (let i = players.length - 1; i > 0; i-=1) {
            let j = Math.floor(Math.random() * (i + 1)); //Math.floor() will drop the decimal point so we have a random round number
            let temp = players[i];
            players[i] = players[j];
            players[j] = temp; 
        }

        //using slice to get the range of the arrays and get a new array, so the original stays immutable
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
