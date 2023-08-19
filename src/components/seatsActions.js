// seatsActions.js

// Define an action type for seat selection

export const TOGGLE_SEAT_SELECTION = 'TOGGLE_SEAT_SELECTION';

// Define an action creator for seat selection
export function toggleSeatSelection(seatId) {
  return {
    type: TOGGLE_SEAT_SELECTION,
    seatId,
  };
}
