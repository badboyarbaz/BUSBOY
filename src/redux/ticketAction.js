
export const SET_TICKET_DETAILS = 'SET_TICKET_DETAILS';
export const CLEAR_TICKET_DETAILS = 'CLEAR_TICKET_DETAILS';

export const setTicketDetails = (ticketDetails) => ({
  type: SET_TICKET_DETAILS,
  payload: ticketDetails,
});

export const clearTicketDetails = () => ({
  type: CLEAR_TICKET_DETAILS,
});
