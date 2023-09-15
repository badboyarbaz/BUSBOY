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
import BillDetailsContainer from "../components/BillDetailsContainer";
import TermsAndCancellation from "../components/TermsAndCancellation";

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
    <div className="relative bg-whitesmoke w-full h-screen overflow-auto space-y-10 text-left text-xl text-gray-200 font-poppins">
       <Header />
      <main className="pt-2 px-4 md:px-10 flex flex-col md:flex-row items-start justify-between gap-8">
        <div className="w-full md:w-1/2 flex flex-col items-start justify-start gap-8 text-left text-xl text-gray-200 font-poppins">
          <div className="relative top-0 left-0 md:-mt-8 text-13xl font-semibold text-royalblue-100 z-[4]">
            Review your booking
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-start justify-start gap-8">
            <SectionSeatSelectionCard />
          </div>
          <div className="flex w-full rounded-3xs bg-white flex flex-col p-8 items-start justify-start gap-8 border border-gray-400">
            <div className="w-full flex flex-row py-2.5 px-0 box-border items-center justify-start">
              <div className="flex flex-row items-center justify-start gap-[30px]">
                <div className="relative font-medium">{`Pickup & Drop`}</div>
                <div className="relative text-xs font-medium text-gray-400">{`Please select your pickup point and drop point  `}</div>
              </div>
            </div>
            <PickupAndDropCard />
          </div>
          < TermsAndCancellation/>
        </div>


        <div className="w-full md:w-1/2 flex flex-col items-end justify-end gap-8 md:mt-12 text-left text-xl text-gray-200 font-poppins">
          <PassengerDetailsForm selectedSeats={selectedSeats} formikRef={formikRef} formData={formData} setFormData={setFormData} />
          <OfferCard />
          <ApplyCodeForm />
          <BillDetailsContainer/>
          <div className="flex flex-col w-full py-2 px-0 items-center justify-center gap-5 text-xs text-gray-100">
            <div className="relative font-medium">
              Discounts, offers and price concessions will be applied later
              during payment
            </div>
            <button
              className="cursor-pointer py-4 px-0 bg-royalblue-100 rounded-3xs w-full flex flex-row box-border items-center justify-between"
              onClick={onBookNowClick}
            >
              <div className="self-stretch flex-1 relative text-base font-semibold font-poppins text-white text-center">
                Book Now
              </div>
            </button>
            <button
              className="cursor-pointer py-4 px-0 bg-[transparent] rounded-3xs w-full flex flex-row  border-solid border border-tomato items-center justify-between"
            >
              <div className="self-stretch flex-1 relative text-base font-semibold font-poppins text-tomato text-center">
                Cancel
              </div>
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReviewBooking;
