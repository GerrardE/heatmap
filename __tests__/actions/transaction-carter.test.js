import toJson from 'enzyme-to-json';
import TransactionCarter from '../../src/actions/transactions-carter.json';

const setupCarter = () => {
  const wrapper = TransactionCarter;
  return wrapper
}

describe('TransactionCarter', () => {
  test('should render the TransactionCarter properly', () => {
    let wrapperCarter;
    wrapperCarter = setupCarter();
    expect(toJson(wrapperCarter)).toMatchSnapshot();
  })
});
