import { useMemo } from "react";

const Header = ({ propTextDecoration, propTextDecoration1 }) => {
  const myBookingStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  const loginSignStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration1,
    };
  }, [propTextDecoration1]);

  return (
    <div className="absolute top-[0px] left-[0px] bg-white box-border w-[1920px] flex flex-row py-10 px-[100px] items-center justify-between text-left text-5xl text-royalblue-100 font-poppins border-[1px] border-solid border-gray-400">
      <div className="relative font-semibold">
        <span>BUS</span>
        <span className="text-gray-200">BOY</span>
      </div>
      <div className="flex flex-row items-start justify-start gap-[60px] text-sm text-darkslategray">
        <a
          className="[text-decoration:none] relative font-medium text-[inherit]"
          style={myBookingStyle}
        >
          My Booking
        </a>
        <a
          className="[text-decoration:none] relative font-medium text-royalblue-100"
          style={loginSignStyle}
        >
          Login / Sign In
        </a>
      </div>
    </div>
  );
};

export default Header;
