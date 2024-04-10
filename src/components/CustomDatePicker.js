import React, { useState, useMemo, useEffect } from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());

  // useEffect(() => {
  //   if (selectedDate >= addDays(startDate, 6)) {
  //     setStartDate(new Date(selectedDate));
  //   }
  // }, [selectedDate, startDate]);

  const addDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

  const getWeekDates = (start) => {
    return Array.from({ length: 6 }, (_, i) => addDays(start, i));
  };

  const isDateInCurrentWeekView = (date, startDate) => {
    const endDate = addDays(startDate, 6); // Get the end date of the week
    return date >= startDate && date <= endDate;
  };

  const startOfWeek = (date) => {
    const diff =
      date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1); // Adjust if your week starts on a different day
    return new Date(date.setDate(diff));
  };

  const handleDateChange = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize today's date to midnight for comparison

    if (date >= today) {
      setSelectedDate(date);
      // Adjust startDate if selectedDate is not in the current week view
      if (!isDateInCurrentWeekView(date, startDate)) {
        setStartDate(startOfWeek(date));
      }
    } else {
      console.log("Cannot select a date in the past.");
    }
  };

  const handlePrevWeek = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    let newStartDate = addDays(startDate, -6);
    newStartDate = startOfWeek(newStartDate);
    if (newStartDate < today) {
      newStartDate = today;
    }
    setStartDate(newStartDate);
  };
  const handleNextWeek = () => {
    console.log("Before clicking next week:", startDate);
    const newStartDate = addDays(startDate, 6);
    console.log("After clicking next week:", newStartDate);
    setStartDate(newStartDate);
  };

  const datesToShow = useMemo(() => getWeekDates(startDate), [startDate]);
  return (
    <div className="flex flex-col lg:w-full w-full">
      <div className="flex items-center justify-center gap-8 px-6 py-4">
        <button className={`flex items-center `} onClick={handlePrevWeek}>
          <BsArrowLeftSquareFill className="w-7 h-7 hover:fill-royalblue-100 " />
        </button>
        <ul className="flex items-center justify-center">
          <div className="lg:flex-row lg:flex lg:gap-2 grid grid-cols-2 grid-rows-3 gap-12 px-2">
            {datesToShow.map((date, index) => (
              <li
                key={date.toISOString()}
                className={` flex cursor-pointer rounded-md w-16 h-16 items-center justify-center lg:p-4 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 ${
                  selectedDate.toDateString() === date.toDateString()
                    ? "bg-royalblue-100 text-white"
                    : "bg-white border-2 hover:border-royalblue-100"
                }`}
                onClick={() => handleDateChange(date)}
              >
                <div className="text-center">
                  <span className="block text-sm font-medium">
                    {date.toLocaleDateString("en-US", { weekday: "short" })}
                  </span>
                  <span className="block text-lg">{date.getDate()}</span>
                </div>
              </li>
            ))}
          </div>
        </ul>
        <button className="flex items-center " onClick={handleNextWeek}>
          <BsArrowRightSquareFill className="w-7 h-7 hover:fill-royalblue-100" />
        </button>
      </div>
    </div>
  );
};

export default CustomDatePicker;
