import {
  FETCH_CITIES_REQUEST,
  FETCH_CITIES_SUCCESS,
  FETCH_CITIES_FAILURE,
} from "./constants";
import { getCities } from "../services/cityService";

export const fetchCitiesRequest = () => ({
  type: FETCH_CITIES_REQUEST,
});

export const fetchCitiesSuccess = (cities) => ({
  type: FETCH_CITIES_SUCCESS,
  payload: cities,
});

export const fetchCitiesFailure = (error) => ({
  type: FETCH_CITIES_FAILURE,
  payload: error,
});

export const fetchCities = () => (dispatch) => {
  dispatch(fetchCitiesRequest());
  getCities()
    .then((cities) => dispatch(fetchCitiesSuccess(cities)))
    .catch((error) => dispatch(fetchCitiesFailure(error)));
};
