import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../redux/authAction";
import { useNavigate, useLocation } from 'react-router-dom';

const RegistrationForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = React.useState(null);

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          "http://localhost:8800/api/auth/register",
          values
        );
        console.log(response);
        // Authenticate the user
        const actionResult = await dispatch(authenticateUser({
          email: values.email,
          password: values.password,
        }));
        if (actionResult && actionResult.token) {
          const from = location.state?.from || "/";
          navigate(from);
        } else {
          console.log("Error in authReponse:", actionResult);
        }
      } catch (error) {
        console.error(error);
        setError("Something went wrong. Please try again.");
      }
    },
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
          <h1 className="mt-6 ml-8 relative text-2xl leading-6 font-medium">
            Register with{" "}
            <a className="text-decoration-none text-royalblue-100 relative font-semibold">
              <span>BUS</span>
              <span className="text-gray-200">BOY</span>
            </a>
          </h1>
          <form onSubmit={formik.handleSubmit} className="mt-4">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-dimgray"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                {...formik.getFieldProps("name")}
                className="mt-1 p-2 w-full border rounded-md"
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-600 text-sm">{formik.errors.name}</div>
              ) : null}
            </div>
            {/* Email Field */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-dimgray"
              >
                Email
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

            {/* Password Field */}
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

            {/* Confirm Password Field */}
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-dimgray"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                {...formik.getFieldProps("confirmPassword")}
                className="mt-1 p-2 w-full border rounded-md"
              />
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <div className="text-red-600 text-sm">
                  {formik.errors.confirmPassword}
                </div>
              ) : null}
            </div>
            {error && <div className="text-red-600 text-sm">{error}</div>}
            <button
              type="submit"
              className="cursor-pointer py-2.5 px-5 bg-royalblue-100 rounded-2xl w-full h-12 flex items-center justify-center text-white font-medium"
            >
              Register
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default RegistrationForm;
