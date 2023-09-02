import { SELECT_BUS } from "./busAction";

const initialState = {
  selectedBus: {
    id: 1,
    name: "Humsafar Travels",
    departureTime: "4:30 pm",
    arrivalTime: "8:30 am",
  },
};

const busReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_BUS:
      return {
        ...state,
        selectedBus: action.payload,
      };
    default:
      return state;
  }
};

export default busReducer;
