import React, { useMemo } from "react";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = ({ propTextDecoration, propTextDecoration1 }) => {
  const user = useSelector((state) => state.auth.user);

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

  const navigate = useNavigate();
  const onSearchButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLoginClick = useCallback (() => {
    navigate("/authentication/login");
  }, [navigate])

  return (
    <div className="absolute top-[0px] left-[0px] bg-white box-border w-[1920px] flex flex-row py-10 px-[100px] items-center justify-between text-left text-3xl text-royalblue-100 font-poppins border-[1px] border-solid border-gray-400">
      <div className="relative font-semibold cursor-pointer text-13xl"
      onClick={onSearchButtonClick}>
        <span>BUS</span>
        <span className="text-gray-200">BOY</span>
      </div>
      <div className="flex flex-row items-start justify-start gap-[60px] text-md text-darkslategray">
        <a
          className="relative font-medium text-[inherit]"
          style={myBookingStyle}
        >
          My Booking
        </a>
        {user ? (
        <div className="user-info relative font-medium text-royalblue-100">
          <span>Hello, {user.name}!</span>
          {user.avatar && <img src={user.avatar} alt={`${user.name}'s avatar`} />}
        </div>
      ) : (
        <a
        className="cursor-pointer relative font-medium text-royalblue-100"
        style={loginSignStyle}
        onClick={onLoginClick}
        >
        Login / Sign Up
      </a>
      )}
        
      </div>
    </div>
  );
};

export default Header;
