import { SUBMIT_PASSENGER_DETAILS } from "./constants";

const initialState = {
  passengerDetails: {},
};

const formReducer = (state = initialState, action) => {
  console.log("Reducer received action:", action);
  switch (action.type) {
    case SUBMIT_PASSENGER_DETAILS:
      return {
        ...state,
        passengerDetails: action.payload,
      };
    default:
      return state;
  }
};
export default formReducer;
