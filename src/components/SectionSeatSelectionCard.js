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
    return seatArray.map((seat) => (
      <button
        key={seat.id}
        className={`cursor-pointer p-0 relative w-24 h-14 bg-cover bg-no-repeat bg-[top] transform rotate-90 ${getSeatImage(
          seat
        )}`}
        onClick={() => handleSeatClick(seat.id)}
      >
        {seat.price}
      </button>
    ));
  };

  const UpperDeckSingleRow = seats.slice(0, 5);
  const UpperDeckDoubleRow = seats.slice(5, 15);
  const LowerDeckSingleRow = seats.slice(15, 20);
  const LowerDeckDoubleRow = seats.slice(20, 30);

  return (
    <section className="flex flex-col w-full bg-white md:w-auto p-4 gap-4 border border-solid rounded-3xs border-gray-400">
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
      <div className="flex flex-col md:flex-row gap-5 p-5 items-start">
        {/* Upper Deck */}
        <div className="">
          <div className="font-medium">Upper Deck</div>
          <div className="flex flex-row gap-2 pt-5">
            {/* Single Row Seats */}
            <div className="mr-4 space-y-10">
              {renderSeats(UpperDeckSingleRow)}
            </div>
            {/* Double Row Seats */}
            <div className="space-y-10 -mr-4">
              {renderSeats(UpperDeckDoubleRow.slice(0, 5))}
            </div>
            <div className="space-y-10 -ml-4">
              {renderSeats(UpperDeckDoubleRow.slice(5, 10))}
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="hidden md:block md:w-1 md:h-[500px] md:bg-gray-400 md:mx-4 md:my-5"></div>
        <div className="block md:hidden w-full h-0.5 bg-gray-400 my-4"></div>

        {/* Lower Deck */}
        <div className="">
          <div className="font-medium">Lower Deck</div>
          <div className="flex flex-row gap-2 pt-5 ">
            {/* Single Row Seats */}
            <div className="mr-4 space-y-10">
              {renderSeats(LowerDeckSingleRow)}
            </div>
            {/* Double Row Seats */}
            <div className="space-y-10 -mr-4">
              {renderSeats(LowerDeckDoubleRow.slice(0, 5))}
            </div>
            <div className="space-y-10 -ml-4">
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
