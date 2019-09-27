import * as types from '../../src/actions/types'
import transactions from '../../src/reducers/transactions';

describe('Tests for the TRANSACTION REDUCER', () => {
  test('INITIAL STATE', () => {
    const action = { type: 'dummy_action' };
    const initialState = {
      errors: null,
      transactions: null
    }

    expect(transactions(undefined, action)).toEqual(initialState);
  });

  test('Test for GET_TRANSACTION_SUCCESS', () => {
    const mock = {
      errors: null,
      transactions: null
    };

    const action = {
      type: types.GET_TRANSACTION_SUCCESS
    };

    const state = transactions(undefined, action);

    expect(state).toEqual({
      ...state,
      ...mock.transactions
    });
  });
})
