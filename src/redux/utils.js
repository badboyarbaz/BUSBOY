export const calculateFareDetails = (selectedSeats) => {
  console.log("Selected Seats in calculateFareDetails: ", selectedSeats);
  if (!selectedSeats || typeof selectedSeats !== "object") {
    return {
      baseFare: 0,
      additionalCharges: 0,
      taxAmount: 0,
      totalAmount: 0,
      totalSeats: 0,
    };
  }

  const seatsArray = Object.values(selectedSeats);
  const baseFare = selectedSeats.reduce((total, seat) => {
    console.log("Current Seat Price: ", seat.price);
    return total + (seat.price || 0);
  }, 0);
  const additionalCharges = 0;
  const totalSeats = seatsArray.length;
  const taxAmount = (baseFare + additionalCharges) * 0.18; // 18% tax
  const totalAmount = baseFare + additionalCharges + taxAmount;

  return {
    baseFare,
    additionalCharges,
    taxAmount,
    totalAmount,
    totalSeats,
  };
};
