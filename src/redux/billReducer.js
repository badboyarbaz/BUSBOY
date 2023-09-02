import { UPDATE_BILL_DETAILS } from "./billActions";

const initialState = {
    billDetails: {
      baseFare: 0,
      additionalCharges: 0,
      totalSeats: 0,
      taxAmount: 0,
      totalAmount: 0,
    },
};

const billReducer = (state = initialState, action) => {
    console.log("Received action: ", action); 
  switch (action.type) {
    case UPDATE_BILL_DETAILS:
      return {
        ...state,
        billDetails: {
          ...state.billDetails,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export default billReducer;
