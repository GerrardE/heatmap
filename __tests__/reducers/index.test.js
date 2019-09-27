import index from '../../src/reducers/index';

const initialState = {
  transactions: null,
  errors: null
}

describe('Index Reducer', () => {
  it('should return initial state', () => {
    const store = index(initialState, '');

    expect(store).toEqual(initialState);
  });
});
