import axios from "axios";

export const authenticateUser = (values) => async (dispatch) => {
  const apiUrl =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_API_URL_PROD
      : process.env.REACT_APP_API_URL_DEV;
  try {
    console.log("About to send request", values);
    const response = await axios.post(`${apiUrl}/api/auth/login`, values, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response && response.data) {
      console.log("Server Response:", response.data);

      const { token, userInfo } = response.data;

      if (token) {
        const payload = { token, user: userInfo };
        console.log("Payload:", payload);
        dispatch({ type: "USER_AUTHENTICATED", payload }); // Direct payload
        return Promise.resolve(payload); // Explicitly resolve the Promise
      } else {
        dispatch({ type: "USER_AUTHENTICATION_FAILED" });
        return Promise.reject(null); // Explicitly reject the Promise
      }
    } else {
      console.log("No response from server or no data in the response");
      dispatch({ type: "USER_AUTHENTICATION_FAILED" });
      return Promise.reject(null); // Explicitly reject the Promise
    }
  } catch (error) {
    if (error.response && error.response.data) {
      console.error("Error details:", error.response.data);
    } else {
      console.error("No response from server or no data in the response");
    }
    dispatch({ type: "USER_AUTHENTICATION_FAILED" });
    return Promise.reject(error); // Explicitly reject the Promise
  }
};
