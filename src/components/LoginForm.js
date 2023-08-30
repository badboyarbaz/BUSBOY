import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { authenticateUser } from "../redux/authAction";

const LoginForm = () => {
  console.log("Rendering LoginForm component");
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log("Form submitted");
      console.log("Form submitted with values:", values);
      try {
        const actionResult = await dispatch(authenticateUser(values));
        console.log("ActionResult:", actionResult);
        
        if (actionResult && actionResult.token) {
          const from = location.state?.from || "/";
          navigate(from);
        } else {
          console.error("Authentication failed");
        }
      } catch (error) {
        console.log("Entered catch block");
        console.error("Error details:", error);
      }
    }    
});

  return (
    <div className="relative bg-whitesmoke w-full flex flex-col min-h-screen flex-grow">
      <header className="absolute top-0 left-0 w-full flex flex-row py-10 px-10 box-border items-start justify-start text-left text-royalblue-100 font-poppins">
        {/* Logo */}
        <a className="text-decoration-none text-5xl relative font-semibold">
          <span>BUS</span>
          <span className="text-gray-200">BOY</span>
        </a>
      </header>
      <main className="relative ml-8 top-[175px] flex flex-col bg-transparent items-center justify-center font-poppins">
        <div className="flex flex-col m-10  w-[600px] bg-white p-16 rounded-md box-border border-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <h1 className="m-10 relative text-2xl leading-6 font-medium">
            Login to{" "}
            <a className="text-decoration-none text-royalblue-100 relative font-semibold">
              <span>BUS</span>
              <span className="text-gray-200">BOY</span>
            </a>
          </h1>
          <form onSubmit={formik.handleSubmit} className="mt-4">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-dimgray"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                {...formik.getFieldProps("email")}
                className="mt-1 p-2 w-full border rounded-md"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-600 text-sm">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-dimgray"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                {...formik.getFieldProps("password")}
                className="mt-1 p-2 w-full border rounded-md"
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-600 text-sm">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>
            <button
              type="submit"
              className="cursor-pointer py-2.5 px-5 bg-royalblue-100 rounded-2xl w-full h-12 flex items-center justify-center text-white font-medium"
            >
              Login
            </button>
            <button
              type="button"
              className="mt-3 w-full"
              onClick={() => navigate('/authentication/register')}
            >
              <a className="mt-2 py-2.5 px-5 bg-gray-200 rounded-2xl w-full h-12 flex items-center justify-center text-white font-medium">
                New to BUSBOY? Register Here!
              </a>
            </button>
          </form>
        </div>
      </main>
    </div>
    )
  };

export default LoginForm;