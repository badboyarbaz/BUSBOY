// cityReducer.js
import {
  FETCH_CITIES_REQUEST,
  FETCH_CITIES_SUCCESS,
  FETCH_CITIES_FAILURE,
} from "./constants";

const initialState = {
  loading: false,
  cities: [],
  error: null,
};

const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CITIES_REQUEST:
      return { ...state, loading: true };
    case FETCH_CITIES_SUCCESS:
      return { ...state, loading: false, cities: action.payload };
    case FETCH_CITIES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default cityReducer;
