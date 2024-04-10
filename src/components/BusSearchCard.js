import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCities } from "../redux/cityActions";
import React, { useEffect, useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CustomAutosuggest from "./CustomAutosuggest";

const BusSearchCard = () => {
  const dispatch = useDispatch();
  const { cities } = useSelector((state) => state.city);

  const [departureCity, setDepartureCity] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  const handleDepartureSuggestion = (event, { suggestion }) => {
    setDepartureCity(suggestion);
  };

  const handleDestinationSuggestion = (event, { suggestion }) => {
    setDestinationCity(suggestion);
  };

  const navigate = useNavigate();

  const onSearchButtonClick = useCallback(() => {
    navigate("/bus-list");
  }, [navigate, dispatch]);

  //Auto Suggest styling
  const theme = {
    container:
      "relative flex flex-col py-4 px-6 items-center justify-center border-b border-solid border-gray-400 text-center",
    input: "outline-none text-center lg:text-start",
    suggestionsContainerOpen:
      "absolute top-16 flex flex-col w-full font-normal text-sm text-white bg-gray-500 z-50 border border-gray-300 rounded-lg shadow-lg m-auto lg:ml-10",
    suggestionsList: "list-none flex flex-col",
    suggestion: "p-2 cursor-pointer",
    suggestionHighlighted: "bg-royalblue-100 rounded-lg",
  };

  // custom date picker as per theme
  const CustomDatePicker = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        customInput={<CustomInput />}
        dateFormat="dd/MMM/yyyy"
        className="text-center"
      />
    );
  };

  const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <div
      className="flex flex-row gap-44 py-4 px-6 items-center justify-start text-center border-b border-solid border-gray-400"
      onClick={onClick}
      ref={ref}
    >
      <div>{value}</div>
      <img
        className="relative flex item-center justify-end"
        src="../calendericon.svg"
        alt="calendar icon"
      />
    </div>
  ));

  return (
    <div className="w-full flex flex-col lg:ml-10 lg:grid grid-cols-2 grid-rows-3 gap-8 mt-6">
      <CustomAutosuggest
        suggestionsData={cities.map((city) => city.name)}
        placeholder={"Departure"}
        onSuggestionSelected={handleDepartureSuggestion}
        theme={theme}
      />

      <CustomAutosuggest
        suggestionsData={cities.map((city) => city.name)}
        placeholder={"Destination"}
        onSuggestionSelected={handleDestinationSuggestion}
        theme={theme}
      />

      <div className="relative w-full">
        <CustomDatePicker />
      </div>
      <button
        className="cursor-pointer py-4 px-6 text-white bg-royalblue-100 w-full mx-auto md:mx-0 rounded-xl flex items-center justify-center outline-none"
        id="search"
        onClick={onSearchButtonClick}
      >
        Search for buses
      </button>
    </div>
  );
};

export default BusSearchCard;
