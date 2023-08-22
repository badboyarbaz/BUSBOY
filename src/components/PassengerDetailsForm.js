import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, DropdownButton} from "react-bootstrap";

import { useSelector } from 'react-redux';
import {useState} from "react";

const PassengerDetailsForm = () => {
    // Get the selected seats from the Redux store
    const seats = useSelector((state) => state.seats.seats);
    const selectedSeats = seats.filter((seat) => seat.selected);
    ///handling dropdown Age and Gender options
    const genderOptions = ['Male', 'Female', 'Other'];
    const ageOptions = Array.from({ length: 100 }, (_, i) => i + 1);

    // Initialize selected genders with default values
    const [selectedGenders, setSelectedGenders] = useState(
        Array(selectedSeats.length).fill('Select Gender')
    );
    const [selectedAges, setSelectedAges] = useState(
        Array(selectedSeats.length).fill('Select Age')
    );

    // Handler function to update selected gender for a specific passenger
    const handleGenderSelect = (selectedGender, passengerIndex) => {
        const updatedGenders = [...selectedGenders];
        updatedGenders[passengerIndex] = selectedGender;
        setSelectedGenders(updatedGenders);
    };
    const handleAgeSelect = (selectedAge, passengerIndex) => {
        const updatedAges = [...selectedAges];
        updatedAges[passengerIndex] = selectedAge;
        setSelectedAges(updatedAges);
    };
    return (
        <div className="rounded-3xs bg-white box-border w-[778px] h-[430px] flex flex-col p-[50px] items-start justify-start gap-[30px] text-left text-xl text-gray-200 font-poppins border-[1px] border-solid border-gray-400">
            <h1 className="m-0 self-stretch flex flex-row py-2.5 px-0 items-center justify-start text-[inherit] font-inherit">
                <div className="flex flex-row items-center justify-start">
                    <div className="relative font-medium">Passenger Details</div>
                </div>
            </h1>
            {selectedSeats.map((seat, index) => (
                <div key={index} className="w-[653px] h-20 flex flex-row items-start justify-start gap-[30px]">
                    <div className="flex-1 flex flex-row items-start justify-start gap-[30px]">
                        <input
                            className="[border:none] font-medium font-poppins text-sm bg-[transparent] flex-1 overflow-hidden flex flex-row py-4 px-[25px] items-center justify-start border-b-[1px] border-solid border-gray-400"
                            type="text"
                            placeholder={`Passenger ${index + 1} Name (Seat ID: ${seat.id})`}
                        />
                        <DropdownButton
                            className="w-[172px] flex flex-col"
                            title={selectedGenders[index]}
                            variant="primary"
                            align="start"
                            drop="down"
                            id={`dropdown-button-drop-down-gender-${index}`}
                            onSelect={(eventKey) => handleGenderSelect(eventKey, index)}
                        >
                            {genderOptions.map((gender, genderIndex) => (
                                <Dropdown.Item key={genderIndex} eventKey={gender}>
                                    {gender}
                                </Dropdown.Item>
                            ))}
                        </DropdownButton>
                    </div>
                    <DropdownButton
                        className="w-[109px] flex flex-col"
                        title={selectedAges[index]}
                        variant="primary"
                        align="start"
                        drop="down"
                        id={`dropdown-button-drop-down-age-${index}`}
                        onSelect={(eventKey) => handleAgeSelect(eventKey, index)}
                    >
                        {ageOptions.map((age, ageIndex) => (
                            <Dropdown.Item key={ageIndex} eventKey={age}>
                                {age}
                            </Dropdown.Item>
                        ))}
                    </DropdownButton>
                </div>
            ))}
        </div>
    );
};

export default PassengerDetailsForm;




/*
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, DropdownButton, SplitButton } from "react-bootstrap";

const PassengerDetailsForm = ({selectedSeats}) => {
  return (
    <div className="rounded-3xs bg-white box-border w-[778px] h-[430px] flex flex-col p-[50px] items-start justify-start gap-[30px] text-left text-xl text-gray-200 font-poppins border-[1px] border-solid border-gray-400">
      <h1 className="m-0 self-stretch flex flex-row py-2.5 px-0 items-center justify-start text-[inherit] font-inherit">
        <div className="flex flex-row items-center justify-start">
          <div className="relative font-medium">Passenger Details</div>
        </div>
      </h1>
      <div className="w-[653px] h-20 flex flex-row items-start justify-start gap-[30px]">
        <div className="flex-1 flex flex-row items-start justify-start gap-[30px]">
          <input
            className="[border:none] font-medium font-poppins text-sm bg-[transparent] flex-1 overflow-hidden flex flex-row py-4 px-[25px] items-center justify-start border-b-[1px] border-solid border-gray-400"
            type="text"
            placeholder="Passenger 1 Name"
          />
          <DropdownButton
            className="w-[172px] flex flex-col"
            title="Gender"
            variant="primary"
            align="start"
            drop="down"
          >{` `}</DropdownButton>
        </div>
        <DropdownButton
          className="w-[109px] flex flex-col"
          title="Age"
          variant="primary"
          align="start"
          drop="down"
        >{` `}</DropdownButton>
      </div>
      <div className="w-[653px] h-20 flex flex-row items-start justify-start gap-[30px]">
        <div className="flex-1 flex flex-row items-start justify-start gap-[30px]">
          <input
            className="[border:none] font-medium font-poppins text-sm bg-[transparent] flex-1 overflow-hidden flex flex-row py-4 px-[25px] items-center justify-start border-b-[1px] border-solid border-gray-400"
            type="text"
            placeholder="Passenger 2 Name"
          />
          <DropdownButton
            className="w-[172px] flex flex-col"
            title="Gender"
            variant="primary"
            align="start"
            drop="down"
          >{` `}</DropdownButton>
        </div>
        <DropdownButton
          className="w-[109px] flex flex-col"
          title="Age"
          variant="primary"
          align="start"
          drop="down"
        >{` `}</DropdownButton>
      </div>
      <div className="w-[653px] h-20 overflow-x-auto shrink-0 flex flex-row items-start justify-start gap-[30px]">
        <div className="flex-1 flex flex-row items-start justify-start gap-[30px]">
          <input
            className="[border:none] font-medium font-poppins text-sm bg-[transparent] flex-1 overflow-hidden flex flex-row py-4 px-[25px] items-center justify-start border-b-[1px] border-solid border-gray-400"
            type="text"
            placeholder="Passenger 3 Name"
          />
          <DropdownButton
            className="w-[172px] flex flex-col"
            title="Gender"
            variant="primary"
            align="start"
            drop="down"
          >{` `}</DropdownButton>
        </div>
        <DropdownButton
          className="w-[109px] flex flex-col"
          title="Age"
          variant="primary"
          align="start"
          drop="down"
        >{` `}</DropdownButton>
      </div>
    </div>
  );
};

export default PassengerDetailsForm;
*/
