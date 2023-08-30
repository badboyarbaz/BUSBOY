import Footer from "../components/Footer";
import PassengerDetailsForm from "../components/PassengerDetailsForm";
import OfferCard from "../components/OfferCard";
import ApplyCodeForm from "../components/ApplyCodeForm";
import SectionSeatSelectionCard from "../components/SectionSeatSelectionCard";
import PickupAndDropCard from "../components/PickupAndDropCard";
import Header from "../components/Header";
import { useNavigate, useLocation } from "react-router-dom";
import { useCallback, useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { submitPassengerDetails } from "../redux/formAction";

const ReviewBooking = () => {
  const [selectedSeats, setSelectedSeats] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const userIsAuthenticated = useSelector(state => state.auth.isAuthenticated);

  // Retrieve saved form data from Redux state
  const savedFormData = useSelector((state) => state.form.passengerDetails);

  const [formData, setFormData] = useState(savedFormData ? savedFormData : {
    passengers: [
      {
        name: "",
        gender: "",
        age: "",
      },
    ],
    mobile: "",
    email: "",
  });


  // Populate form fields with saved data
  useEffect(() => {
    if (savedFormData && Object.keys(savedFormData).length > 0) {
      setFormData(savedFormData);
    }
  }, [savedFormData]);

  const formikRef = useRef();

  const onBookNowClick = useCallback(() => {
    console.log("onBookNowClick triggered");
    // Trigger Formik's submitForm method
    if (formikRef.current) { 
      console.log("Formik ref exists", formikRef.current);

      formikRef.current.submitForm().then(() => {
        // Check if the form is valid and submitted successfully
        if (formikRef.current && formikRef.current.isValid) {
          console.log("Dispatching action with formik values:", formikRef.current.values);
          dispatch(submitPassengerDetails(formikRef.current.values));
          
          if (userIsAuthenticated) {
            navigate("/payment-portal");
          } else {
            navigate("/authentication/login", { state: { from: location.pathname } });
          }
        }else{
          console.log("Formik ref is null");
        }
      }).catch((error) => {
        console.log("Formik submitForm error:", error);
      });
    }
  }, [navigate, userIsAuthenticated, location, dispatch, formData]);

  return (
    <div className="relative bg-white w-full h-[2164px] overflow-hidden text-left text-xl text-gray-200 font-poppins">
       <Header />
      <main className="absolute top-[146px] left-[100px] w-[1720px] flex flex-row items-start justify-between">
        <section className="my-0 mx-[!important] absolute top-[6px] left-[942px] h-[1478px] flex flex-col items-start justify-start gap-[30px] z-[0] text-left text-xl text-gray-200 font-poppins">
          <PassengerDetailsForm selectedSeats={selectedSeats} formikRef={formikRef} formData={formData} setFormData={setFormData} />
          
          <OfferCard />
          <ApplyCodeForm />
          <div
            className="self-stretch rounded-3xs bg-white flex flex-col p-[30px] items-start justify-center gap-[30px] border-[1px] border-solid border-gray-400"
            id="billdetails"
          >
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
              <div className="relative font-medium inline-block w-[643px]">
                Bill details
              </div>
              <div className="self-stretch h-[74px] flex flex-col items-start justify-between text-xs text-gray-100">
                <div className="self-stretch flex flex-row items-center justify-between">
                  <div className="relative font-medium">Base Ticket Fare</div>
                  <div className="relative font-medium">₹2000.00</div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-between">
                  <div className="relative font-medium">Total Travellers</div>
                  <div className="relative font-medium">3</div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-between">
                  <div className="relative font-medium">{`CGST & SGST`}</div>
                  <div className="relative font-medium">₹500.00</div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-between text-darkslategray">
              <div className="relative font-medium">Total Charge</div>
              <div className="relative font-medium">₹6500.00</div>
            </div>
          </div>
          <div className="flex flex-col py-2.5 px-0 items-center justify-center gap-[20px] text-xs text-gray-100">
            <div className="relative font-medium">
              Discounts, offers and price concessions will be applied later
              during payment
            </div>
            <button
              className="cursor-pointer [border:none] py-[15px] px-0 bg-royalblue-100 rounded-3xs w-[703px] flex flex-row box-border items-center justify-between"
              onClick={onBookNowClick}
              autoFocus
            >
              <div className="self-stretch flex-1 relative text-base font-semibold font-poppins text-white text-center">
                Book Now
              </div>
            </button>
            <button
              className="cursor-pointer [border:none] py-[15px] px-0 bg-[transparent] rounded-3xs w-[703px] flex flex-row box-border items-center justify-between"
              autoFocus
            >
              <div className="self-stretch flex-1 relative text-base font-semibold font-poppins text-tomato text-center">
                Cancel
              </div>
            </button>
          </div>
        </section>
        <div className="my-0 mx-[!important] absolute top-[6px] left-[4px] h-[1460px] flex flex-col items-start justify-start z-[1]">
          <SectionSeatSelectionCard />
        </div>
        <div className="my-0 mx-[!important] absolute top-[1119px] left-[0px] rounded-3xs bg-white flex flex-col p-[45px] items-start justify-start gap-[30px] z-[2] border-[1px] border-solid border-gray-400">
          <div className="w-[823px] flex flex-row py-2.5 px-0 box-border items-center justify-start">
            <div className="flex flex-row items-center justify-start gap-[30px]">
              <div className="relative font-medium">{`Pickup & Drop`}</div>
              <div className="relative text-xs font-medium text-gray-400">{`Please select your pickup point and drop point  `}</div>
            </div>
          </div>
          <PickupAndDropCard />
        </div>
        <div
          className="my-0 mx-[!important] absolute top-[1390px] left-[4px] flex flex-row items-start justify-start gap-[30px] z-[3] text-sm text-gray-100"
          id="privacycard"
        >
          <div className="relative capitalize font-medium">
            Cancellation Policy
          </div>
          <div className="relative capitalize font-medium">{`Terms & Conditions`}</div>
          <div className="relative capitalize font-medium">
            Travel Insurance
          </div>
        </div>
        <div className="absolute top-[0px] left-[16px] p-1 text-13xl font-semibold text-royalblue-100 z-[4]">
          Review your booking
        </div>
      </main>
      <Footer dimensionCode="/vector4.svg" socialTop="1877px" />
    </div>
  );
};

export default ReviewBooking;
