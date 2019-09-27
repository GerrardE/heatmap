import { GET_TRANSACTION_ERROR } from '../actions/types';

const initialState = {
  errors: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TRANSACTION_ERROR:
      return {
        errors: action.payload
      };

    default:
      return state;
  }
}
