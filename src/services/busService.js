import axios from "axios";

export const getBuses = async () => {
  const apiUrl =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_API_URL_PROD
      : process.env.REACT_APP_API_URL_DEV;
  try {
    const response = await axios.get(`${apiUrl}/api/buses`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
