import { createSelector } from 'reselect';

const getAllSeats = (state) => state.seats.seats;

export const getSelectedSeats = createSelector(
    [getAllSeats],
    (allSeats) => {
        return Object.values(allSeats).filter((seat) => seat.selected);
    }
);
