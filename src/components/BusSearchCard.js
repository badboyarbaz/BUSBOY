import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Autosuggest from "react-autosuggest";
import { useDispatch, useSelector } from "react-redux";
import { fetchCities } from "../redux/cityActions";
import React, { useEffect, useState } from "react";

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const BusSearchCard = () => {
  const dispatch = useDispatch();
  const { cities } = useSelector((state) => state.city);

  const [departureCity, setDepartureCity] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0
      ? []
      : cities.filter(
          (city) => city.name.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  const getSuggestionValue = (suggestion) => suggestion.name;

  const renderSuggestion = (suggestion) => <div>{suggestion.name}</div>;

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const navigate = useNavigate();

  const onSearchButtonClick = useCallback(() => {
    navigate("/bus-list");
  }, [navigate]);

  //Auto Suggest for departure and destination
  const autosuggestTheme = {
    container:
      "relative font-medium font-poppins text-md bg-[transparent] shadow-[0px_3px_4px_rgba(0,_0,_0,_0.25)] w-[335px] flex flex-col py-4 px-[25px] items-center justify-center border-b-[1px] border-solid border-gray-400",
    input: "focus:outline-none focus:border-royalblue-100 border-none w-full",
    suggestionsContainerOpen:
      "absolute top-[100%] flex flex-col justify-start m-2 font-light font-poppins text-md bg-grey-100 z-50 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg",
    suggestionsList: "m-0 p-0 list-none flex flex-col",
    suggestion: "p-2 cursor-pointer hover:bg-grey-100",
    suggestionHighlighted: "bg-royalblue-100",
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
    />
  );
};

const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
  <div className="font-light font-poppins text-md bg-[transparent] shadow-[0px_3px_4px_rgba(0,_0,_0,_0.25)] w-[335px] flex flex-row gap-5 py-4 px-[25px] items-center justify-start border-b-[1px] border-solid border-gray-400" onClick={onClick} ref={ref}>
    <div>{value}</div>
    <img className="relative pl-7 ml-14" src="../calendericon.svg" alt="calendar icon" />
  </div>
));


  return (
    <div className="relative w-full xl:grid xl:grid-cols-2 xl:grid-rows-3 xl:gap-4 md:w-[660px] h-[auto] pt-10 md:pl-5 flex flex-col md:flex-row items-start justify-start md:mt-[95px] mx-auto md:mx-0">
      <div className="relative w-[350px] mx-auto md:mx-0 md:w-[335px] md:top-[0px] md:left-[0px] mb-4 xl:col-span-1 xl:row-span-1">
        <Autosuggest
          suggestions={suggestions}
          theme={autosuggestTheme}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={{
            placeholder: "Aurangabad, Maharashtra",
            value: departureCity,
            onChange: (event, { newValue }) => setDepartureCity(newValue),
          }}
        />
      </div>

      <div className="relative w-[350px] mx-auto md:mx-0 md:w-[335px] md:top-[0px] md:left-[50px] mb-4 xl:col-span-1 xl:row-span-1">
        <Autosuggest
          suggestions={suggestions}
          theme={autosuggestTheme}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={{
            placeholder: "Bangalore, Karnataka",
            value: destinationCity,
            onChange: (event, { newValue }) => setDestinationCity(newValue),
          }}
        />
      </div>
      <div className="relative w-[350px] mx-auto md:mx-0 mb-4 xl:col-span-2 xl:row-span-1">
      <CustomDatePicker />
    </div>
    <button
  className="cursor-pointer py-4 px-[25px] bg-royalblue-100 w-[350px] mx-auto md:mx-0 rounded-3xs md:w-[724px] overflow-hidden flex items-center justify-center xl:col-span-2 xl:row-span-1"
  autoFocus
  id="search"
  onClick={onSearchButtonClick}
>
  <div className="text-sm font-medium font-poppins text-white text-center">
    Search for buses
  </div>
</button>
    </div>
  );
};

export default BusSearchCard;
