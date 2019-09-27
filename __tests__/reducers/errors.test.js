import * as types from '../../src/actions/types'
import errors from '../../src/reducers/errors';

describe('Tests for the ERRORS REDUCER', () => {
  test('INITIAL STATE', () => {
    const action = { type: 'dummy_action' };
    const initialState = {
      errors: null
    }

    expect(errors(undefined, action)).toEqual(initialState);
  });

  test('Test for GET_TRANSACTION_ERROR', () => {
    const mock = {
      errors: {}
    };

    const action = {
      type: types.GET_TRANSACTION_ERROR
    };

    const state = errors(undefined, action);

    expect(state).toEqual({
      ...mock.errors
    });
  });
})
