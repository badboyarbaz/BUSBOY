import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, DropdownButton } from "react-bootstrap";

import { useSelector } from "react-redux";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { submitPassengerDetails } from "../redux/formAction";



const PassengerDetailsForm = ({  formikRef, formData, setFormData }) => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    passengers: Yup.array()
      .of(
        Yup.object({
          name: Yup.string().required("Name is required"),
          gender: Yup.string().required("Gender is required"),
          age: Yup.number().required("Age is required").min(1).max(100),
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
  
  // Get the selected seats from the Redux store
  const seats = useSelector((state) => state.seats.seats);
  const selectedSeats = seats.filter((seat) => seat.selected);

  ///handling dropdown Age and Gender options
  const genderOptions = ["Male", "Female", "Other"];
  const ageOptions = Array.from({ length: 100 }, (_, i) => i + 1);

  return (
    <div className="flex flex-col items-center justify-cetner">
      <Formik
        innerRef={formikRef}
        initialValues={formData}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          dispatch(submitPassengerDetails(values));
        }}
      >
        {({ setFieldValue, values }) => {
          return (
            <form>
              <div className="rounded-3xs bg-white box-border w-[778px] flex flex-col p-[50px] items-start justify-start gap-y-10 text-left text-xl text-gray-200 font-poppins border-[1px] border-solid border-gray-400 flex-1 overflow-y-auto max-h-[462px]">
                <h1 className="m-0 self-stretch flex flex-row py-2.5 px-0 items-center justify-start text-[inherit] font-inherit">
                  <div className="flex flex-row items-center justify-start">
                    <div className="relative font-medium">
                      Passenger Details
                    </div>
                  </div>
                </h1>
                {selectedSeats.map((seat, index) => (
                  <div
                    key={index}
                    className="w-[653px] h-20 flex flex-row items-start justify-start gap-[30px]"
                  >
                    <div className="flex-1 flex flex-row items-start justify-start gap-[30px]">
                      <Field
                        className="font-medium font-poppins text-base bg-[transparent] flex-1 overflow-hidden flex flex-row py-4 px-[25px] items-center justify-start border-b-[1px] border-solid border-gray-400"
                        name={`passengers[${index}].name`}
                        type="text"
                        placeholder={`Passenger ${index + 1} Name (Seat ID: ${
                          seat.id
                        })`}
                      />
                      <DropdownButton
                        className="w-[172px] flex flex-col py-4 px-[25px] items-center"
                        title={
                          values.passengers && values.passengers[index]
                            ? values.passengers[index].gender
                            : "Select Gender"
                        }
                        variant="primary"
                        align="start"
                        drop="down"
                        id={`dropdown-button-drop-down-gender-${index}`}
                        onSelect={(selectedGender) =>
                          setFieldValue(
                            `passengers[${index}].gender`,
                            selectedGender
                          )
                        }
                      >
                        {genderOptions.map((gender, genderIndex) => (
                          <Dropdown.Item key={genderIndex} eventKey={gender}>
                            {gender}
                          </Dropdown.Item>
                        ))}
                      </DropdownButton>
                    </div>
                    <DropdownButton
                      className="w-[109px] flex flex-col py-4 px-[25px] items-center"
                      title={
                        values.passengers && values.passengers[index]
                          ? values.passengers[index].age
                          : "Select Age"
                      }
                      variant="primary"
                      align="start"
                      drop="down"
                      id={`dropdown-button-drop-down-age-${index}`}
                      onSelect={(eventKey) =>
                        setFieldValue(`passengers[${index}].age`, eventKey)
                      }
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
              <div className="rounded-3xs bg-white box-border w-[778px] flex flex-col p-[50px] items-start justify-start border-[1px] border-solid border-gray-400 mt-9">
                <div className="self-stretch flex flex-row py-2.5 px-0 items-center justify-start relative gap-[622px]">
                  <h1 className="m-0 top-[0px] relative text-[inherit] font-medium font-inherit ]">
                    Contact Details
                  </h1>
                  <h3 className="absolute top-[30px] right-[60px] text-sm font-medium font-inherit text-gray-400">
                    Your ticket info will be sent here
                  </h3>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[30px]">
                  <Field
                    className="h-10 font-medium font-poppins text-base bg-[transparent] flex-1 flex flex-row items-start justify-start"
                    name="mobile"
                    type="text"
                    placeholder="Mobile Number"
                    required
                  />
                  <Field
                    className="h-10 font-medium font-poppins text-base bg-[transparent] flex-1 flex flex-row items-start justify-start"
                    name="email"
                    type="email"
                    placeholder="Email ID"
                    required
                  />
                </div>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default PassengerDetailsForm;
