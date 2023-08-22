import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // //
import seatsReducer from './seatsReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    seats: seatsReducer,
});

const store = createStore(rootReducer,
    applyMiddleware(thunk) // using thunk middleware
);

export default store;
