export const generateTicket = (
  passengerDetails,
  selectedSeats,
  paymentInfo,
) => {
  const ticketID = `${new Date().getTime()}-${Math.random()}`;
  const dateIssued = new Date().toLocaleString();

  return {
    ticketID,
    dateIssued,
    passengerDetails,
    selectedSeats,
    paymentInfo,
  };
};
