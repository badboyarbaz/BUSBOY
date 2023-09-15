import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CustomDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const getNextDates = () => {
    const nextDates = [];
    for (let i = 0; i < 6; i++) {
      const newDate = new Date(selectedDate);
      newDate.setDate(newDate.getDate() + i);
      nextDates.push(newDate);
    }
    return nextDates;
  };

  const nextDates = getNextDates();

  const handleDateChange = (offset) => {
    const newSelectedDate = new Date(selectedDate);
    newSelectedDate.setDate(selectedDate.getDate() + offset);
    setSelectedDate(newSelectedDate);
  };
  return (
      <div className="flex flex-col   w-full md:w-auto">
        <div className="text-13xl border-b-2 font-semibold text-royalblue-400 justify-start mb-4 md:mb-0 md:mr-4">
          Your Search Results
        </div>
        <div className="flex items-center justify-center">
          <button
              className="flex items-center mr-4"
              onClick={() => handleDateChange(-1)}
          >
            <img className="w-8 h-4" alt="" src="/leftArrow.svg" />
          </button>
          <ul className="flex flex-wrap items-center p-2 lg:p-0 justify-between gap-4">
            {nextDates.map((date, index) => (
                <li
                    key={index}
                    className={` flex cursor-pointer rounded-md p-3 lg:p-4 ${
                        selectedDate.getTime() === date.getTime()
                            ? 'bg-royalblue-100 text-white'
                            : 'bg-white'
                    }`}
                    onClick={() => setSelectedDate(date)}
                >
                  <div className="text-center">
                <span className="block text-sm">
                  {date.toLocaleDateString('en-US', { weekday: 'short' })}
                </span>
                    <span className="block text-xl">{date.getDate()}</span>
                  </div>
                </li>
            ))}
          </ul>
          <button
              className="flex items-center ml-4"
              onClick={() => handleDateChange(1)}
          >
            <img className="w-8 h-4" alt="" src="/rightArrow.svg" />
          </button>
        </div>
      </div>
  );
};


export default CustomDatePicker;
