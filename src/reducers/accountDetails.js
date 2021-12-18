import {
  RETRIEVE_ACCOUNT_DETAILS,
} from "../actions/types";

const initialState = [];

function accountDetailsReducer(accountDetails = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case RETRIEVE_ACCOUNT_DETAILS:
      return payload;
    default:
      return accountDetails;
  }
};

export default accountDetailsReducer;