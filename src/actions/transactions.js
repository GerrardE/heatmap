import Data from './transactions-carter.json';
import { GET_TRANSACTION_SUCCESS, GET_TRANSACTION_ERROR } from './types';

const res = Data;
const getTransactions = () => async(dispatch) => {
  try{
    dispatch({
      type: GET_TRANSACTION_SUCCESS,
      payload: res
    })
  } catch(err){
    dispatch({
      type: GET_TRANSACTION_ERROR,
      payload: err
    })
  }
}

export default getTransactions;
