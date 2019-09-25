import { combineReducers } from 'redux';
import transactions from './transactions';
import errors from './errors';

export default combineReducers({
  transactions,
  errors
})
