//import all the constants as we'll need them eventually

import * as Constants from '../data/Constants';


//export each action creator which returns the action which is an object with two properties, type and payload:
export const addPlayerActionCreator = player => {
    return {
        type: Constants.ADD_PLAYER,
        payload: player
    }
}