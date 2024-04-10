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
  const userIsAuthenticated = useSelector(
    (state) => state.auth.isAuthenticated,
  );

  // Retrieve saved form data from Redux state
  const savedFormData = useSelector((state) => state.form.passengerDetails);

  const [formData, setFormData] = useState(
    savedFormData
      ? savedFormData
      : {
          passengers: [
            {
              name: "",
              gender: "",
              age: "",
            },
          ],
          mobile: "",
          email: "",
        },
  );

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

      formikRef.current
        .submitForm()
        .then(() => {
          // Check if the form is valid and submitted successfully
          if (formikRef.current && formikRef.current.isValid) {
            console.log(
              "Dispatching action with formik values:",
              formikRef.current.values,
            );
            dispatch(submitPassengerDetails(formikRef.current.values));

            if (userIsAuthenticated) {
              navigate("/payment-portal");
            } else {
              navigate("/authentication/login", {
                state: { from: location.pathname },
              });
            }
          } else {
            console.log("Formik ref is null");
          }
        })
        .catch((error) => {
          console.log("Formik submitForm error:", error);
        });
    }
  }, [navigate, userIsAuthenticated, location, dispatch, formData]);

  return (
    <div className="relative bg-whitesmoke w-full h-auto">
      <Header />
      <div className="flex flex-col text-xl font-semibold text-gray-200 font-poppins py-4 px-12">
        Review your booking
      </div>
      <main className="pt-2 px-4 lg:px-10 flex flex-col xl:flex-row items-start justify-between gap-8">
        <div className="w-full lg:w-full flex flex-col items-start justify-start gap-8">
          <SectionSeatSelectionCard />
          <PickupAndDropCard />
          <TermsAndCancellation />
        </div>

        <div className="w-full md:w-1/3 space-y-4">
          <PassengerDetailsForm
            selectedSeats={selectedSeats}
            formikRef={formikRef}
            formData={formData}
            setFormData={setFormData}
          />
          <OfferCard />
          <ApplyCodeForm />
          <BillDetailsContainer />
          <div className="flex flex-row w-full items-center justify-between gap-2 pb-4">
            <button className="px-4 py-2 rounded-xl border-tomato border w-1/2 h-auto text-tomato hover:bg-tomato hover:text-white">
              CANCEL
            </button>
            <button
              className="px-4 py-2 bg-royalblue-100 rounded-xl w-1/2 h-auto text-white"
              onClick={onBookNowClick}
            >
              Book Now
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReviewBooking;
