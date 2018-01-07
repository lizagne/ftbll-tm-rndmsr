import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App';
import './css/style.min.css'
import { Provider } from 'react-redux';

//import Reducers to then combine together:
import playersReducer from './reducers/playersReducer';
import teamReducer from './reducers/teamReducer';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

//I need to use custom middleware - Thunk to run async actions.
import thunk from 'redux-thunk';

//set up React devtools to help with development
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

//compose is used to apply several store enhancers in a row,
const enhancer = compose(
    applyMiddleware(thunk),
    devTools
);

//The state produced by combineReducers() namespaces the states of each reducer under their keys as passed to combineReducers()
const store = createStore(combineReducers({ players: playersReducer, teams: teamReducer }), enhancer);


ReactDOM.render(
	//Provider makes the store available to all container components in the app without passing it explicitly
    <Provider store={ store } >
    	<App />
    </Provider>, 
    	document.getElementById('root')
);

registerServiceWorker();

