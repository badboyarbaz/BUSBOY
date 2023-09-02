import {calculateFareDetails} from "./utils"

export const UPDATE_BILL_DETAILS = "UPDATE_BILL_DETAILS";


export const updateBillDetails = (fareDetails) => {
    console.log("Dispatching details: ", fareDetails);
    return {
        type: UPDATE_BILL_DETAILS,
        payload: fareDetails,
    };
};
