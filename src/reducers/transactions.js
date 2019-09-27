import { GET_TRANSACTION_SUCCESS } from "../actions/types";

const initialState = {
  transactions: null,
  errors: null
};

export default (state = initialState, action) => {

  switch (action.type) {
    case GET_TRANSACTION_SUCCESS:
      return {
        ...state,
        transactions: action.payload
      };

    default:
      return state;
  }
};
