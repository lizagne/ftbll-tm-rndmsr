import initial from "./initial";
import { updateInput, addName } from "./actions";

const updateInput = (state, { value }) => 
	state.set("input", value);

const addPlayer = (state, { input }) => 
	input !== "" ?
		state.update("players", players => 
			players.push(input)).set("input", "")
	: state;

export default (state = initial, action) => {
	switch (action.type) {
        case UPDATE_INPUT: return updateInput(state, action);
        case ADD_PLAYER: return addPlayer(state, action);
    }
};
