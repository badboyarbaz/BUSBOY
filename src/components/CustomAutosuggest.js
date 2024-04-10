import React, { useState } from "react";
import Autosuggest from "react-autosuggest";

const CustomAutosuggest = ({
  suggestionsData,
  placeholder,
  onSuggestionSelected,
  theme,
}) => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0
      ? []
      : suggestionsData.filter(
          (suggestion) =>
            suggestion.toLowerCase().slice(0, inputLength) === inputValue,
        );
  };

  const getSuggestionValue = (suggestion) => suggestion;

  const renderSuggestion = (suggestion) => <div>{suggestion}</div>;

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={({ value }) =>
        setSuggestions(getSuggestions(value))
      }
      onSuggestionsClearRequested={() => setSuggestions([])}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={{
        placeholder,
        value,
        onChange: (event, { newValue }) => setValue(newValue),
      }}
      onSuggestionSelected={onSuggestionSelected}
      theme={theme}
    />
  );
};

export default CustomAutosuggest;
