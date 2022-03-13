import { defineComponent } from 'vue';
import { mount, flushPromises } from '@vue/test-utils';
import { OrderRepository } from '@/api';
import { displayPrice, optionsFormat } from '@/utils/format';
import CartPage from './CartPage.vue';

jest.mock('vue-router', () => ({
  useRouter: jest.fn(() => ({
    push: () => {},
  })),
}));

jest.mock('@/api', () => ({
  OrderRepository: {
    fetchCart: jest.fn(() =>
      Promise.resolve({
        data: {
          cart: [
            {
              quantity: 1,
              cupSize: {
                name: 'Short',
                optionNo: 1,
              },
              options: [
                {
                  optionNo: 1,
                  quantity: 1,
                },
              ],
              product: {
                productNo: 2,
                nameKr: '카푸치노',
                nameEng: 'Cappuccino',
                isNewProduct: false,
                isHot: false,
                imgUrl:
                  'https://projectlion-vue.s3.ap-northeast-2.amazonaws.com/items/cappuccino.jpg',
                price: 5000,
              },
              optionsInfo: [
                {
                  name: '에스프레소 샷',
                  unitprice: 500,
                  baseQuantity: 1,
                  optionNo: 1,
                },
              ],
            },
          ],
        },
      }),
    ),
  },
}));

describe('CartPage.vue', () => {
  let wrapper;
  let mockCart;

  beforeEach(async () => {
    const { data } = await OrderRepository.fetchCart();
    mockCart = data.cart;
    const cartPageComponent = defineComponent({
      components: { CartPage },
      template: '<Suspense><CartPage /></Suspense>',
    });
    wrapper = mount(cartPageComponent);
    await flushPromises();
  });

  it('상품의 사진이 표시됩니다.', () => {
    const firstProductImage = wrapper.find('[data-test="product-image"]');

    expect(firstProductImage.attributes('src')).toEqual(mockCart[0].product.imgUrl);
    expect(firstProductImage.attributes('alt')).toEqual(mockCart[0].product.nameKr);
  });

  it('상품의 한글 상품명이 표시됩니다.', () => {
    const firstProductName = wrapper.find('[data-test="product-name"]');

    expect(firstProductName.text()).toEqual(mockCart[0].product.nameKr);
  });

  it('상품의 영문 상품명이 표시됩니다.', () => {
    const firstProductEngName = wrapper.find('[data-test="product-eng-name"]');

    expect(firstProductEngName.text()).toEqual(mockCart[0].product.nameEng);
  });

  it('옵션 내역이 표시됩니다.', () => {
    const firstProductOption = wrapper.find('[data-test="product-option-name"]');

    expect(firstProductOption.text()).toEqual(optionsFormat(mockCart[0]));
  });

  it('상품의 단일 가격이 표시됩니다.', () => {
    const firstProductPrice = wrapper.find('[data-test="product-price"]');

    expect(firstProductPrice.text()).toEqual(displayPrice(mockCart[0].product.price));
  });

  it('퍼스널 옵션 이름이 표시됩니다.', () => {
    const firstPersonalOptionName = wrapper.find('[data-test="personal-option-name"]');

    expect(firstPersonalOptionName.text()).toEqual(mockCart[0].optionsInfo[0].name);
  });

  it('퍼스널 옵션 가격이 표시됩니다.', () => {
    const firstPersonalOptionPrice = wrapper.find('[data-test="personal-option-price"]');

    expect(firstPersonalOptionPrice.text()).toEqual(
      displayPrice(mockCart[0].optionsInfo[0].unitprice),
    );
  });

  it('상품의 합산 가격이 표시됩니다.', () => {
    const productTotalPrice = wrapper.find('[data-test="product-total-price"]');

    expect(productTotalPrice.text()).toEqual('5,000 원');
  });

  it('장바구니의 총액이 표시됩니다.', () => {
    const amountDue = wrapper.find('[data-test="amt-due"]');

    expect(amountDue.text()).toEqual('5,000 원');
  });
});
