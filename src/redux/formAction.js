import { SUBMIT_PASSENGER_DETAILS } from './constants';

export const submitPassengerDetails = (values) => {
  return {
    type: SUBMIT_PASSENGER_DETAILS,
    payload: values,
  };
};