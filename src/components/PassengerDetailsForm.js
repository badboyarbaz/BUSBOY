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
        }),
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
      setOpenAgeDropdowns({});
      setOpenGenderDropdowns((prevState) => ({
        ...prevState,
        [index]: !prevState[index],
      }));
    } else {
      setOpenGenderDropdowns({});
      setOpenAgeDropdowns((prevState) => ({
        ...prevState,
        [index]: !prevState[index],
      }));
      console.log("Age index:", index);
    }
  };

  // Get the selected seats from the Redux store
  const seats = useSelector((state) => state.seats.seats);
  const selectedSeats = seats.filter((seat) => seat.selected);

  ///handling dropdown Age and Gender options
  const genderOptions = ["Male", "Female", "Other"];
  const ageOptions = ["0-5", "6-18", "19-45", "45 and above"];

  //Button styles
  const buttonProps =
    "w-28 h-12 border-b border-gray-300 hover:border-royalblue-100 ";
  const optionsProps =
    "cursor-pointer text-center hover:bg-royalblue-100 border-b p-2";

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
        <form className="flex flex-col bg-white w-full px-4 py-2 gap-4 rounded-xl border border-gray-400">
          <h1 className="text-sm font-medium">Passenger Details</h1>
          {selectedSeats.map((seat, index) => (
            <div key={index} className="flex flex-row gap-4">
              {/* Passenger Name Field */}
              <Field
                className="p-2 border-b border-gray-400 min-w-[36px] h-12 outline-none"
                name={`passengers[${index}].name`}
                type="text"
                placeholder={`Passenger ${index + 1} Name (Seat ID: ${
                  seat.id
                })`}
              />

              {/* Dropdowns for Gender */}
              <div className="relative flex flex-row min-w-[36px]">
                <button
                  className={buttonProps}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleDropdown("gender", index);
                  }}
                >
                  {values.passengers && values.passengers[index]
                    ? values.passengers[index].gender
                    : "Select Gender"}
                </button>
                {openGenderDropdowns[index] && (
                  <div className="absolute z-10 top-full left-0 w-full min-w-10 text-sm bg-white">
                    {genderOptions.map((gender, genderIndex) => (
                      <div
                        key={genderIndex}
                        className={optionsProps}
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

              {/* Dropdown for Age */}
              <div className="relative flex flex-row min-w-[36px]">
                <button
                  className={buttonProps}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleDropdown("age", index);
                  }}
                >
                  {values.passengers && values.passengers[index]
                    ? values.passengers[index].age
                    : "Select Age"}
                </button>
                {openAgeDropdowns[index] && (
                  <div className="absolute z-10 top-full left-0 w-full min-w-10 text-sm bg-white">
                    {ageOptions.map((age, ageIndex) => (
                      <div
                        key={ageIndex}
                        className={optionsProps}
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
          <div className="w-full flex flex-col border-t-2 border-solid border-gray-400 gap-2 pt-4">
            <div className="flex flex-row items-start justify-between py-2">
              <p className="text-start text-sm font-semibold">
                Contact Details
              </p>
              <p className="relative text-sm font-medium font-inherit text-gray-400">
                Your ticket info will be sent here
              </p>
            </div>
            <div className="flex flex-col lg:flex-row text-center px-4 py-2 items-start justify-start gap-5">
              <Field
                className="h-10 w-full font-medium bg-[transparent] outline-none border-b border-gray-400"
                name="mobile"
                type="text"
                placeholder="Mobile Number"
                required
              />
              <Field
                className="h-10 w-full font-medium bg-[transparent] outline-none border-b border-gray-400"
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
