//using Immutable JS to keep everything immutable, importing in List and Map to set up the initial state.
import { Map, List } from 'immutable';

const InitialState = Map({ 
	input: "",
	players: List([]),
});

export default InitialState;