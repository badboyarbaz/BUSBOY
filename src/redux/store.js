import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import seatsReducer from "./seatsReducer";
import busReducer from "./busReducer";
import cityReducer from "./cityReducer";
import formReducer from "./formReducer";
import authReducer from "./authReducer";
import billReducer from "./billReducer";
import paymentReducer from "./paymentReducer";
import ticketReducer from "./ticketReducer";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// combining reducers first
const rootReducer = combineReducers({
  bus: busReducer,
  seats: seatsReducer,
  city: cityReducer,
  auth: authReducer,
  form: formReducer,
  bill: billReducer,
  payment: paymentReducer,
  ticket: ticketReducer,
});

// creating persistConfig and persistedReducer
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Store
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  persistedReducer, // using persistedReducer instead of rootReducer
  composeEnhancer(applyMiddleware(thunk)),
);

export const persistor = persistStore(store);

export default store;
