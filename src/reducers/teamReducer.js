import * as constants from '../data/Constants';

//initialise the state as two empty arrays
const teamReducer = (state = [[],[]], action) => {
    
    switch(action.type) {
        case constants.GENERATE_TEAM: {
            let teams = [];
            teams.push(action.payload.teamA);
            teams.push(action.payload.teamB);

            return Object.assign({ }, state, {
                teams: teams
            }); }
        
        case constants.RESET: //when RESEST event is called return the state back to the initialised one.
            return state = [[], []];

        default:
            return state;
    }
};

export default teamReducer;