import React, { useEffect, useState } from "react";
import CustomDatePicker from "./CustomDatePicker";
import TourPackage from "./TourPackage";
import CustomAutosuggest from "./CustomAutosuggest";
import { useSelector } from "react-redux";
import Calendar from "./CustomDatePicker";

const SearchResultsContainer = () => {
  const { cities } = useSelector((state) => state.city);
  const [departureCity, setDepartureCity] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDepartureSuggestion = (event, { suggestion }) => {
    setDepartureCity(suggestion);
  };

  const handleDestinationSuggestion = (event, { suggestion }) => {
    setDestinationCity(suggestion);
  };

  const handleSelectedDate = (date) => {
    setSelectedDate(date);
  };

  const theme = {
    container:
      "relative flex flex-col py-4 px-6 items-center justify-center border-b border-solid border-gray-400",
    input: "outline-none bg-transparent",
    suggestionsContainerOpen:
      "absolute top-16 flex flex-col w-full font-normal text-sm text-white bg-gray-500 z-50 border border-gray-300 rounded-lg shadow-lg",
    suggestionsList: "list-none flex flex-col",
    suggestion: "p-2 cursor-pointer",
    suggestionHighlighted: "bg-royalblue-100 rounded-lg",
  };

  // useEffect(() => {
  //   dispatch(fetchCities());
  // })
  return (
    <div className="flex flex-col w-full p-4 gap-6">
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full">
          <div className="border-b border-gray-100 font-semibold text-base justify-start p-4">
            Your Search Results
          </div>
          <CustomDatePicker />
        </div>
      </div>
      <div className="flex flex-col md:flex-row  w-full items-center justify-evenly ">
        <CustomAutosuggest
          placeholder={"Departure"}
          suggestionsData={cities.map((city) => city.name)}
          onSuggestionSelected={handleDepartureSuggestion}
          theme={theme}
        />

        <CustomAutosuggest
          placeholder={"Destination"}
          suggestionsData={cities.map((city) => city.name)}
          onSuggestionSelected={handleDestinationSuggestion}
          theme={theme}
        />
      </div>
      <button className="w-full h-12 flex items-center justify-center md:w-1/2 bg-royalblue-100 py-4 rounded-md mx-auto text-white text-center">
        Search for BUS
      </button>
      <TourPackage />
    </div>
  );
};

export default SearchResultsContainer;
