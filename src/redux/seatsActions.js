// seatsActions.js
import { SEAT_TYPES } from './constants';

export const TOGGLE_SEAT_SELECTION = 'TOGGLE_SEAT_SELECTION';

export function toggleSeatSelection(seatId) {
  return (dispatch, getState) => {
    const seats = getState().seats.seats; // Accessing the seats array
    const seat = seats.find((s) => s.id === seatId);

    if (seat.type === SEAT_TYPES.UNAVAILABLE || seat.type === SEAT_TYPES.FEMALE) {
      // Dispatch an error action
      return dispatch({
        type: 'SEAT_SELECTION_ERROR',
        error: 'Seat is unavailable or reserved for females.',
      });
    }

    // Dispatch the success action
    dispatch({
      type: 'TOGGLE_SEAT_SELECTION',
      seatId,
    });
  };
}

export default toggleSeatSelection;