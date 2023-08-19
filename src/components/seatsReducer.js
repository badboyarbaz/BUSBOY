// seatsReducer.js

import { TOGGLE_SEAT_SELECTION } from './seatsActions';

// Define a reducer to handle seat selection
const initialState = [
  { id: 0, type: "Female", price: 1600, selected: true },
  { id: 1, type: "Available", price: 1600, selected: false },
  { id: 2, type: "Unavailable", price: 1600, selected: false },
  { id: 3, type: "Available", price: 1600, selected: false },
  { id: 4, type: "Female", price: 1600, selected: false },
  { id: 5, type: "Female", price: 1600, selected: false },
  { id: 6, type: "Available", price: 1600, selected: false },
  { id: 7, type: "Available", price: 1600, selected: false },
  { id: 8, type: "Unavailable", price: 1600, selected: false },
  { id: 9, type: "Available", price: 1600, selected: false },
  { id: 10, type: "Female", price: 1600, selected: false },
  { id: 11, type: "Female", price: 1600, selected: false },
  { id: 12, type: "Available", price: 1600, selected: false },
  { id: 13, type: "Available", price: 1600, selected: false },
  { id: 14, type: "Unavailable", price: 1600, selected: false },
  { id: 15, type: "Available", price: 1600, selected: false },
  { id: 16, type: "Female", price: 1600, selected: false },
  { id: 17, type: "Female", price: 1600, selected: false },
  { id: 18, type: "Available", price: 1600, selected: false },
  { id: 19, type: "Available", price: 1600, selected: false },
  { id: 20, type: "Unavailable", price: 1600, selected: false },
  { id: 21, type: "Available", price: 1600, selected: false },
  { id: 22, type: "Female", price: 1600, selected: false },
  { id: 23, type: "Female", price: 1600, selected: false },
  { id: 24, type: "Unavailable", price: 1600, selected: false },
  { id: 25, type: "Available", price: 1600, selected: false },
  { id: 26, type: "Female", price: 1600, selected: false },
  { id: 27, type: "Female", price: 1600, selected: false },
  { id: 28, type: "Female", price: 1600, selected: false },
  { id: 29, type: "Female", price: 1600, selected: false },
  { id: 30, type: "Female", price: 1600, selected: false },
];

function seatsReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SEAT_SELECTION:
      // Find the index of the seat in the state array
      const seatIndex = state.findIndex(seat => seat.id === action.seatId);

      // Create a new seat object with the selected property toggled
      const updatedSeat = {
        ...state[seatIndex],
        selected: !state[seatIndex].selected,
      };
      
      // Return a new state array with the updated seat
      return [
        ...state.slice(0, seatIndex),
        updatedSeat,
        ...state.slice(seatIndex + 1),
      ];
    default:
      return state;
  }
}
export default seatsReducer;