import { useSelector, useDispatch } from "react-redux";
import { toggleSeatSelection } from "../redux/seatsActions";

const SectionSeatSelectionCard = () => {
  const seatsState = useSelector((state) => state.seats);
  const seats = seatsState.seats;
  const dispatch = useDispatch();

  const handleSeatClick = (seatId) => {
    dispatch(toggleSeatSelection(seatId));
  };

  const getSeatImage = (seat) => {
    let seatImage = seat.selected
      ? "bg-[url(../public/selectedseat.png)]"
      : seat.type === "Female"
        ? "bg-[url(../public/femaleseat.png)]"
        : seat.type === "Available"
          ? "bg-[url(../public/availableseat.png)]"
          : "bg-[url(../public/unavailableseat.png)]";
    return seatImage;
  };

  const renderSeats = (seatArray) => {
    return (
      <div className="flex space-x-2 lg:space-x-4">
        {seatArray.map((seat) => (
          <button
            key={seat.id}
            className={`cursor-pointerrelative w-12 h-8 lg:w-24 lg:h-14 bg-cover hover:scale-105 ${getSeatImage(
              seat,
            )}`}
            onClick={() => handleSeatClick(seat.id)}
          >
            <div className="font-extralight lg:font-normal text-xs lg:text-sm pb-2 pr-2">
              {seat.price}
            </div>
          </button>
        ))}
      </div>
    );
  };

  const UpperDeckSingleRow = seats.slice(0, 5);
  const UpperDeckDoubleRow = seats.slice(5, 15);
  const LowerDeckSingleRow = seats.slice(15, 20);
  const LowerDeckDoubleRow = seats.slice(20, 30);

  return (
    <section className="flex flex-col w-full bg-white p-4 gap-4 border border-solid rounded-lg border-gray-400 ">
      {/* Header */}
      <div className="flex flex-row justify-between text-xl">
        <div className="font-medium">Seat Selection</div>
        <div className="rounded bg-royalblue-300 w-8 h-8 flex items-center justify-center">
          <img className="w-4 h-4" alt="" src="/union.svg" />
        </div>
      </div>

      {/* Seat Price */}
      <div className="flex flex-row items-center justify-center gap-3 text-xs md:text-lg rounded-lg bg-blue-50 py-2">
        <div className="font-medium">SEAT PRICE</div>
        {/* Price Buttons */}
        {["All", "1600", "1800", "2000"].map((price) => (
          <button
            key={price}
            className="cursor-pointer py-2 px-2 bg-[transparent] rounded border border-royalblue-100"
          >
            <div className="text-xs font-medium text-royalblue-100">
              {price}
            </div>
          </button>
        ))}
      </div>

      {/* Decks Container */}
      <div className="flex flex-row flex-wrap gap-4 m-auto justify-center items-center">
        {/* Upper Deck */}
        <div className="flex flex-col">
          <div className="font-medium mb-2 text-left">Upper Deck</div>
          <div className="flex flex-col">
            {/* Single Row Seats */}
            <div className="space-y-0">{renderSeats(UpperDeckSingleRow)}</div>
            {/* Double Row Seats */}
            <div className="space-y-4">
              {renderSeats(UpperDeckDoubleRow.slice(0, 5))}
              {renderSeats(UpperDeckDoubleRow.slice(5, 10))}
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="flex w-full h-0.5 bg-gray-400 my-4"></div>

        {/* Lower Deck */}
        <div className="flex flex-col ">
          <div className="font-medium mb-2 text-left">Lower Deck</div>
          <div className="flex flex-col ">
            {/* Single Row Seats */}
            <div className="space-y-8">{renderSeats(LowerDeckSingleRow)}</div>
            {/* Double Row Seats */}
            <div className="space-y-8">
              {renderSeats(LowerDeckDoubleRow.slice(0, 5))}
              {renderSeats(LowerDeckDoubleRow.slice(5, 10))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-4 text-lg rounded-lg bg-blue-50 py-2">
        <div className="font-medium">SEAT LEGEND</div>
        {[
          { label: "AVAILABLE", imgSrc: "/availableseat.png" },
          { label: "UNAVAILABLE", imgSrc: "/unavailableseat.png" },
          { label: "FEMALE", imgSrc: "/femaleseat.png" },
        ].map((legend) => (
          <div key={legend.label} className="flex flex-col items-center pt-1">
            <img
              className="w-16 h-10 bg-cover transform rotate-90"
              alt={legend.label}
              src={legend.imgSrc}
            />
            <div className="text-xs font-medium text-royalblue-100 mt-2">
              {legend.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionSeatSelectionCard;
