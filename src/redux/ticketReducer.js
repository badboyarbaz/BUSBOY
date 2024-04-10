import { SET_TICKET_DETAILS, CLEAR_TICKET_DETAILS } from "./ticketAction";

const initialState = {
  ticketDetails: null,
};

const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TICKET_DETAILS:
      return {
        ...state,
        ticketDetails: {
          ...state.ticketDetails,
          ...action.payload,
        },
      };
    case CLEAR_TICKET_DETAILS:
      return {
        ...state,
        ticketDetails: null,
      };
    default:
      return state;
  }
};

export default ticketReducer;
