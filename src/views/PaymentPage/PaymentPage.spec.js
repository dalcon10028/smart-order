import { defineComponent } from 'vue';
import { mount } from '@vue/test-utils';
import PaymentPage from './PaymentPage.vue';

jest.mock('vue-router', () => ({
  useRouter: jest.fn(() => ({
    push: () => {},
  })),
}));

jest.mock('vuex', () => ({
  state: jest.fn(() => ({
    orderList: [
      {
        cupSize: { name: 'Short', optionNo: 1 },
        options: [
          { optionNo: 2, quantity: 1, name: '바닐라 시럽', unitprice: 300, baseQuantity: 0 },
        ],
        quantity: 1,
        product: {
          productNo: 1,
          nameKr: '카페 라떼',
          nameEng: 'Caffe Latte',
          isNewProduct: true,
          isHot: false,
          imgUrl: 'https://projectlion-vue.s3.ap-northeast-2.amazonaws.com/items/cappuccino.jpg',
          price: 5000,
        },
      },
    ],
    amountDue: 5000,
  })),
  dispatch: jest.fn(() => {}),
}));

describe('PaymentPage.vue', () => {
  let wrapper;

  beforeEach(() => {
    const paymentPageComponent = defineComponent({
      components: { PaymentPage },
      template: '<Suspense><PaymentPage /></Suspense>',
    });
    wrapper = mount(paymentPageComponent);
  });

  it('장바구니 목록의 내용을 요약하는 문구가 포함이 되어야 합니다.', () => {
    const orderSummary = wrapper.find('[data-test="order-summary"]');

    expect(orderSummary.text()).toEqual('카페 라떼 포함 1잔');
  });

  it('결재 금액을 표시합니다.', () => {
    const orderSummary = wrapper.find('[data-test="order-summary"]');

    expect(orderSummary.text()).toEqual('5,000원을 결제합니다.');
  });

  it('현장 결제 버튼이 존재합니다.', () => {
    const buttonOnSitePayment = wrapper.find('[data-test="on-site-payment"]');

    expect(buttonOnSitePayment.exists()).toBeTruthy();
  });

  it('포인트 결제 버튼이 존재합니다.', () => {
    const buttonPointPayment = wrapper.find('[data-test="point-payment"]');

    expect(buttonPointPayment.exists()).toBeTruthy();
  });
});
