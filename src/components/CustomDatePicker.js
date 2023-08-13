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
    <div className="flex flex-row items-center mt-8 justify-center w-[650px] h-[200px] text-left text-13xl text-royalblue-100 font-poppins">
      <div className="absolute top-[0px] left-[0px] font-semibold">
        Your Search Results
      </div>
      <div className="relative">
        <button
          className="relative flex flex-row items-start left-[-350px] top-8 pl-5"
          onClick={() => handleDateChange(-1)}
        >
          <img className="relative w-30 h-16" alt="" src="/leftArrow.svg" />
        </button>
        <button
          className="relative flex flex-row items-end left-[350px] bottom-8 pl-0"
          onClick={() => handleDateChange(1)}
        >
          <img className="relative w-30 h-16" alt="" src="/rightArrow.svg" />
        </button>
      </div>
      <ul className="m-0 absolute w-[650px] flex flex-row items-center justify-between">
        <div className="">
          <li className="flex flex-row items-center justify-between gap-8 cursor-pointer w-20">
            {nextDates.map((date, index) => (
              <div
                key={index}
                className={`${
                  selectedDate.getTime() === date.getTime()
                    ? 'bg-royalblue-100 rounded-3xs font-medium font-poppins'
                    : 'bg-white rounded-3xs font-medium font-poppins'
                }`}
                onClick={() => setSelectedDate(date)}
              >
                <div className="relative flex flex-col items-center text-xl p-[15px] text-gray-200 text-center">
                  <span>{date.toLocaleDateString('en-US', { weekday: 'short' })}</span>
                  <span className="day">{date.getDate()}</span>
                </div>
              </div>
            ))}
          </li>
        </div>
      </ul>
    </div>
  );
};

export default CustomDatePicker;
