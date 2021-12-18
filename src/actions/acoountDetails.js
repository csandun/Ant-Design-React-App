import {
   
    RETRIEVE_ACCOUNT_DETAILS,
   
  } from "./types";
  
  import AccountDetailsService from "../services/AccountDetailsService";
  

  export const retrieveAccountDetails = () => async (dispatch) => {
    try {
      const res = await AccountDetailsService.getAll();
      debugger;
      dispatch({
        type: RETRIEVE_ACCOUNT_DETAILS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  