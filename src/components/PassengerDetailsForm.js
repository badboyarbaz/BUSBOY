//import "bootstrap/dist/css/bootstrap.min.css";
//import { Dropdown, DropdownButton } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { submitPassengerDetails } from "../redux/formAction";
import { useState } from "react";

const PassengerDetailsForm = ({ formikRef, formData, setFormData }) => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    passengers: Yup.array()
      .of(
        Yup.object({
          name: Yup.string().required("Name is required"),
          gender: Yup.string().required("Gender is required"),
          age: Yup.string().required("Age is required"),
        })
      )
      .required("Must have passengers"),
    mobile: Yup.string()
      .required("Mobile Number is required")
      .matches(/^[0-9]{10}$/, "Must be a valid 10-digit number"),
    email: Yup.string()
      .required("Email ID is required")
      .email("Must be a valid email"),
  });

  // State to manage dropdown visibility

  const [openGenderDropdowns, setOpenGenderDropdowns] = useState({});
  const [openAgeDropdowns, setOpenAgeDropdowns] = useState({});

  // Function to handle dropdown item selection
  const toggleDropdown = (type, index) => {
    if (type === "gender") {
      setOpenGenderDropdowns({ ...openGenderDropdowns, [index]: !openGenderDropdowns[index] });
    } else {
      setOpenAgeDropdowns({ ...openAgeDropdowns, [index]: !openAgeDropdowns[index] });
    }
  };

  // Get the selected seats from the Redux store
  const seats = useSelector((state) => state.seats.seats);
  const selectedSeats = seats.filter((seat) => seat.selected);

  ///handling dropdown Age and Gender options
  const genderOptions = ["Male", "Female", "Other"];
  const ageOptions = ["0-5", "6-18", "19-45", "45 and above"];

  return (
    <Formik
      innerRef={formikRef}
      initialValues={formData}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        dispatch(submitPassengerDetails(values));
      }}
    >
      {({ setFieldValue, values }) => (
        <form className="flex flex-col bg-white w-full p-4 gap-4 rounded-3xs border border-solid border-gray-400">
          <h1 className="text-xl font-medium">Passenger Details</h1>
          {selectedSeats.map((seat, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-4">
              <Field
                className="flex-1 p-2 border-b rounded-3xs h-12"
                name={`passengers[${index}].name`}
                type="text"
                placeholder={`Passenger ${index + 1} Name (Seat ID: ${seat.id})`}
              />
              <div className="relative flex flex-col flex-1">
                <button
                  className={`flex-1 p-2 border-solid border border-royalblue-100 min-w-10 text-nowrap text-sm h-12 rounded-3xs hover:bg-royalblue-100 ${openGenderDropdowns[index] ? 'bg-royalblue-100' : ''}`}
                  onClick={(e) => {
                    e.preventDefault(); 
                    toggleDropdown("gender", index);
                  }}
                
                >
                  {values.passengers && values.passengers[index] ? values.passengers[index].gender : "Select Gender"}
                </button>
                {openGenderDropdowns[index] && (
                  <div className="absolute top-full z-10 left-0 w-full text-sm bg-white border border-royalblue-100">
                    {genderOptions.map((gender, genderIndex) => (
                      <div
                        key={genderIndex}
                        className="cursor-pointer hover:bg-royalblue-100"
                        onClick={() => {
                          setFieldValue(`passengers[${index}].gender`, gender);
                          toggleDropdown("gender", index);
                        }}
                      >
                        {gender}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="relative flex flex-row ">
                <button
                  className={`flex-1 p-2 border-solid border border-royalblue-100 min-w-10 h-12 text-sm rounded-3xs  hover:bg-royalblue-100 ${openAgeDropdowns[index] ? 'bg-royalblue-100' : ''}`}
                  onClick={(e) => {
                    e.preventDefault(); 
                    toggleDropdown("age", index);
                  }}
                >
                  {values.passengers && values.passengers[index] ? values.passengers[index].age : "Select Age"}
                </button>
                {openAgeDropdowns[index] && (
                  <div className="absolute z-10 top-full left-0 w-full min-w-10 text-sm bg-white border border-royalblue-100">
                    {ageOptions.map((age, ageIndex) => (
                      <div
                        key={ageIndex}
                        className="cursor-pointer hover:bg-royalblue-100"
                        onClick={() => {
                          setFieldValue(`passengers[${index}].age`, age);
                          toggleDropdown("age", index);
                        }}
                      >
                        {age}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          {/* Rest of your form */}
          <div className="rounded-3xs bg-white box-border w-full flex flex-col p-4 items-center justify-start border border-solid border-gray-400 mt-9">
                <div className="self-stretch flex flex-row py-2 px-4 items-start justify-start relative gap-20">
                  <h1 className="relative text-[inherit] font-medium font-inherit">
                    Contact Details
                  </h1>
                  <h3 className="relative text-sm font-medium font-inherit text-gray-400">
                    Your ticket info will be sent here
                  </h3>
                </div>
                <div className="self-stretch flex flex-col md:flex-row text-center px-4 py-2 items-start justify-start gap-5">
                  <Field
                    className="h-10 font-medium font-poppins text-base bg-[transparent] flex-1 flex items-start justify-start"
                    name="mobile"
                    type="text"
                    placeholder="Mobile Number"
                    required
                  />
                  <Field
                    className="h-10 font-medium font-poppins text-base bg-[transparent] flex-1 flex items-start justify-start"
                    name="email"
                    type="email"
                    placeholder="Email ID"
                    required
                  />
                </div>
              </div>
        </form>
      )}
    </Formik>
  );
};
export default PassengerDetailsForm;
