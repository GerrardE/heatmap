import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import getTransactions from '../../src/actions/transactions';
import * as types from '../../src/actions/types';

const mockStore = configureStore([thunk]);

const store = mockStore({
  errors: null,
  transactions: null
});

describe('Tests for the ACTIONS', () => {
  beforeEach(() => {
    store.clearActions();
  });
  
  test('Dispatches the GET_TRANSACTION_SUCCESS action and payload', (done) => {
    const payload = {
      test: 'article'
    }

    const expectedActions = [{
      type: types.GET_TRANSACTION_SUCCESS,
      payload
    }]

    store.dispatch(getTransactions())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done()
      })
    done()
  });
  
  test('Dispatches the GET_TRANSACTION_ERROR action and payload', (done) => {
    const payload = {
      transactions: null
    }

    const expectedActions = [{
      type: types.GET_TRANSACTION_ERROR,
      payload
    }]

    store.dispatch(getTransactions())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done()
      })
    done()
  });
})
