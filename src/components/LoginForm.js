import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { authenticateUser } from "../redux/authAction";
import Header from "./Header";
import Footer from "./Footer";

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
  <div className="bg-whitesmoke flex flex-col min-h-screen w-full">
    {/* Header */}
    <Header />

    {/* Main Content */}
    <main className="flex flex-col items-center justify-center md:mt-6 font-poppins px-2">
      <div className="flex flex-col m-10 w-full md:w-1/2 lg:w-1/3 bg-white p-8 rounded-md border border-gray-400 shadow-lg">
        <h1 className="m-10 text-2xl leading-6 font-medium">
          Login to{" "}
          <a className="text-royalblue-100 font-semibold">
            <span>BUS</span>
            <span className="text-gray-200">BOY</span>
          </a>
        </h1>

        {/* Form */}
        <form onSubmit={formik.handleSubmit} className="mt-4">
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-dimgray">
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

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-dimgray">
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

          {/* Login Button */}
          <button
            type="submit"
            className="cursor-pointer py-2 px-5 bg-royalblue-100 rounded-xl w-full h-12 flex items-center justify-center text-white font-medium"
          >
            Login
          </button>

          {/* Register Button */}
          <button
            type="button"
            className="mt-3 w-full"
            onClick={() => navigate('/authentication/register')}
          >
            <a className="mt-2 py-2 px-5 bg-gray-200 rounded-xl w-full h-12 flex items-center justify-center text-white font-medium">
              New to BUSBOY? Register Here!
            </a>
          </button>
        </form>
      </div>
    </main>
    < Footer />
  </div>
)};


export default LoginForm;
