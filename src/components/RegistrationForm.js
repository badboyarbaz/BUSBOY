import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../redux/authAction";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

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
      const apiUrl =
        process.env.NODE_ENV === "production"
          ? process.env.REACT_APP_API_URL_PROD
          : process.env.REACT_APP_API_URL_DEV;
      try {
        const response = await axios.post(
          `${apiUrl}/api/auth/register`,
          values,
        );
        console.log(response);
        // Authenticate the user
        const actionResult = await dispatch(
          authenticateUser({
            email: values.email,
            password: values.password,
          }),
        );
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
    <div className="bg-whitesmoke flex flex-col min-h-screen w-full">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center md:mt-6 font-poppins px-2">
        <div className="flex flex-col m-10 w-full md:w-1/2 lg:w-1/3 bg-white p-8 border-gray-400  rounded-md border-2 shadow-md">
          <h1 className="m-10 text-2xl leading-6 font-medium">
            Register with{" "}
            <a className="text-royalblue-100 font-semibold">
              <span>BUS</span>
              <span className="text-gray-200">BOY</span>
            </a>
          </h1>

          {/* Form */}
          <form onSubmit={formik.handleSubmit} className="mt-4">
            {/* Full Name */}
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

            {/* Email */}
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

            {/* Password */}
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

            {/* Confirm Password */}
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

            {/* Error Message */}
            {error && <div className="text-red-600 text-sm">{error}</div>}

            {/* Register Button */}
            <button
              type="submit"
              className="cursor-pointer py-2 px-5 bg-royalblue-100 rounded-xl w-full h-12 flex items-center justify-center text-white font-medium"
            >
              Register
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default RegistrationForm;
