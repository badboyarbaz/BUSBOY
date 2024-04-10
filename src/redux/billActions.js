import ticketUtils from "../utils/ticketUtils";

export const UPDATE_BILL_DETAILS = "UPDATE_BILL_DETAILS";

export const updateBillDetails = (fareDetails) => {
  console.log("Dispatching details: ", fareDetails);
  return {
    type: UPDATE_BILL_DETAILS,
    payload: fareDetails,
  };
};

export const finalizePayment = (
  passengerDetails,
  selectedSeats,
  paymentInfo,
) => {
  return (dispatch) => {
    const ticket = generateTicket(passengerDetails, selectedSeats, paymentInfo);
    // Dispatch actions to update the state or send the ticket to the backend
    dispatch({ type: "FINALIZE_PAYMENT", payload: ticket });
  };
};
