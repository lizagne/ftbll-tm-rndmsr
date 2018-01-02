
import { GENERATE_TEAM, RESET } from '../data/Constants';

//initialise the state as an array of two empty arrays
const teamReducer = (state = [[],[]], action) => {
    
    switch(action.type) {
        //three cases, Generate teams, reset data, and default of state
        case GENERATE_TEAM: {
            let teams = [];
            teams.push(action.payload.teamA);
            teams.push(action.payload.teamB);

            // The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.    
            return Object.assign({ }, state, {
                teams: teams
            }); }
        
        case RESET: //when RESEST event is called return the state back to the initialised one.
            return state = [[], []];

        default:
            return state;
    }
};

export default teamReducer;