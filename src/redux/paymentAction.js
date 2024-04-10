export const PAYMENT_SUCCESS = "PAYMENT_SUCCESS";
export const PAYMENT_FAILURE = "PAYMENT_FAILURE";

export const paymentSuccess = (paymentDetails) => ({
  type: PAYMENT_SUCCESS,
  payload: paymentDetails,
});

export const paymentFailure = (error) => ({
  type: PAYMENT_FAILURE,
  payload: error,
});
