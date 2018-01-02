import * as constants from '../data/Constants';

const playersReducer = (state = [], action) => {
    
    switch(action.type) {
     
        case constants.ADD_PLAYER:
            action.payload.id = Date.now();
           
            let newState = [...state, action.payload];
            return newState;  

        case constants.EDIT_PLAYER:
            return state.map( player => {
                if(player.id !== action.payload.id) {
                    return player;
                } 
                return action.payload;      
            }) 

        case constants.DELETE_PLAYER:
            newState = state.filter( (player) => 
                player.id !== action.payload.id
            );
                return newState;

        case constants.RESET:
            return state = []; //return back to the original empty array to clear all the names

        default:
            return state;
    }
};

export default playersReducer;