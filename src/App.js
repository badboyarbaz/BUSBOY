import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import BusList from "./pages/BusList";
import ReviewBookingTravellerDet from "./pages/ReviewBookingTravellerDet";
import PaymentPortal from "./pages/PaymentPortal";
import BookedTicket from "./pages/BookedTicket";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/bus-list":
        title = "";
        metaDescription = "";
        break;
      case "/review-booking-traveller-details":
        title = "";
        metaDescription = "";
        break;
      case "/payment-portal":
        title = "";
        metaDescription = "";
        break;
      case "/booked-ticket":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/bus-list" element={<BusList />} />
      <Route
        path="/review-booking-traveller-details"
        element={<ReviewBookingTravellerDet />}
      />
      <Route path="/payment-portal" element={<PaymentPortal />} />
      <Route path="/booked-ticket" element={<BookedTicket />} />
    </Routes>
  );
}
export default App;
