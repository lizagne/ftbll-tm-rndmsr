
import InitialState from "./InitialState";

import { UPDATE_INPUT, ADD_NAME, DELETE_NAME } from "./constants";

const updateInput = (state, { value }) => 
	state.set("input", value);

const addName = (state, { input }) => 
	input !== "" ?
		state.update("players", players => 
			players.push(input)).set("input", "")
	: state;

const deleteName = (state, { id }) => 
	state.update("players", players => players.delete(id));

export default (state = InitialState, action) => {
	switch (action.type) {
        case UPDATE_INPUT: return updateInput(state, action);
        case ADD_NAME: return addName(state, action);
        case DELETE_NAME: return deleteName(state, action);
        default: return state;
    }
};
