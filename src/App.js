import { useNavigationType, useLocation } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import BusList from "./pages/BusList";
import ReviewBooking from "./pages/ReviewBooking";
import PaymentPortal from "./pages/PaymentPortal";
import BookedTicket from "./pages/BookedTicket";
import Authentication from "./pages/Authentication";
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
    let title = "BUSBOY";
    let metaDescription = "A Luxurious Booking Experience";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/bus-list":
        title = "";
        metaDescription = "";
        break;
      case "/authentication":
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
        'head > meta[name="description"]',
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
      <Route path="/review-booking" element={<ReviewBooking />} />
      <Route path="/authentication/*" element={<Authentication />} />
      <Route path="/payment-portal" element={<PaymentPortal />} />
      <Route path="/booked-ticket" element={<BookedTicket />} />
    </Routes>
  );
}
export default App;
