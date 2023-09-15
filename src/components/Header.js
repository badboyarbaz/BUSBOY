import React, { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  const onSearchButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLoginClick = useCallback(() => {
    navigate("/authentication/login");
  }, [navigate]);

  return (
      <div className="relative bg-white w-full flex flex-row py-4 lg:py-10 px-4 lg:px-[100px] items-center justify-between text-3xl text-royalblue-100 font-poppins border-b border-gray-400">
        <div className="font-semibold cursor-pointer text-2xl lg:text-3xl" onClick={onSearchButtonClick}>
          <span>BUS</span>
          <span className="text-gray-200">BOY</span>
        </div>
        <div className="hidden lg:flex flex-row items-center gap-16 text-md text-darkslategray">
          <a className="font-medium">My Booking</a>
          {user ? (
              <div className="user-info font-medium text-royalblue-100">
                <span>Hello, {user.name}!</span>
                {user.avatar && <img src={user.avatar} alt={`${user.name}'s avatar`} />}
              </div>
          ) : (
              <a className="cursor-pointer font-medium text-royalblue-100" onClick={onLoginClick}>
                Login / Sign Up
              </a>
          )}
        </div>
        <div className="lg:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <img src="/hamburger-icon.svg" alt="Menu" />
          </button>
        </div>
        {menuOpen && (
            <div className="absolute top-full right-0 w-64 bg-white border border-gray-300 lg:hidden z-10">
              <a className="block p-4 border-b" onClick={onLoginClick}>
                My Booking
              </a>
              {user ? (
                  <div className="p-4">
                    <span>Hello, {user.name}!</span>
                  </div>
              ) : (
                  <a className="block p-4" onClick={onLoginClick}>
                    Login / Sign Up
                  </a>
              )}
            </div>
        )}
      </div>
  );
};

export default Header;
