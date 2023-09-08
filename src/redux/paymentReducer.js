import { PAYMENT_SUCCESS, PAYMENT_FAILURE } from './paymentAction';

const initialState = {
  isPaymentSuccessful: false,
  paymentDetails: null,
  error: null,
};

const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case PAYMENT_SUCCESS:
      return {
        ...state,
        isPaymentSuccessful: true,
        paymentDetails: action.payload,
      };
    case PAYMENT_FAILURE:
      return {
        ...state,
        isPaymentSuccessful: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default paymentReducer;
