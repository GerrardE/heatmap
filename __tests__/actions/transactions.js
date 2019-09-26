import sinon from 'sinon';
import { equal } from 'assert';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../src/actions/transactions';
import * as types from '../../src/actions/types';

const mockStore = configureStore([thunk]);

const store = mockStore({
  errors: {},
  transactions: {}
});


describe('Tests for the ACTIONS', () => {

})
