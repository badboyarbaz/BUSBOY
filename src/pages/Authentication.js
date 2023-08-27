import { Route, Routes, Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import LoginForm from "../components/LoginForm";
import RegistrationForm from "../components/RegistrationForm";

const RedirectToLogin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/authentication/login');
  }, [navigate]);

  return null;
};

const Authentication = () => {
    console.log("Rendering Authentication component");
    return (
       
        <div>
        <Routes>
          <Route path="/" element={<RedirectToLogin />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="register" element={<RegistrationForm />} />
        </Routes>
        <Outlet />
      </div>
    );
}

export default Authentication;