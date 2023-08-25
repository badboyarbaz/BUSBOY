import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'; // //
import seatsReducer from './seatsReducer';
import cityReducer from './cityReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    seats: seatsReducer,
    city: cityReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));
/*const store = createStore(rootReducer,
    applyMiddleware(thunk), // using thunk middleware
);*/

export default store;
