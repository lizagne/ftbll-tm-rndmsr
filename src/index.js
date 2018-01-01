import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import { Provider } from 'react-redux';

//import Reducers to then combine together:
import playersReducer from './reducers/Reducer';
import teamReducer from './reducers/teamReducer';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const enhancer = compose(
    applyMiddleware(thunk),
    devTools
);

const store = createStore(combineReducers({ players: playersReducer, teams: teamReducer }), enhancer);
window.store = store;

ReactDOM.render(
    <Provider store={ store } >
    	<App />
    </Provider>, document.getElementById('root')
);

