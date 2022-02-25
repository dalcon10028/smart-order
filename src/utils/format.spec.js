import { displayPrice } from './format';

describe('format.js', () => {
  it('금액값을 콤마와 "원"을 붙여 표시합니다. 3000 -> 3,000 원', () => {
    const mockPrice = 3000;

    expect(displayPrice(mockPrice)).toEqual('3,000 원');
  });
});
