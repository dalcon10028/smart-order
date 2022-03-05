// import { shallowMount } from '@vue/test-utils';
// import { displayPrice, optionsFormat } from '@/utils/format';
// import CartPage from './CartPage.vue';

// const totalPrice = order => {
//   const { options, quantity, product } = order;
//   return (
//     product.price * quantity +
//     options.reduce((acc, pn) => acc + (pn.quantity - pn.baseQuantity) * pn.unitprice, 0)
//   );
// };

describe('CartPage.vue', () => {
  // const orderList = [
  //   {
  //     quantity: 1,
  //     cupSize: {
  //       optionNo: 2,
  //       name: 'Tall',
  //     },
  //     options: [
  //       {
  //         optionNo: 1,
  //         quantity: 1,
  //         name: '에스프레소 샷',
  //         unitprice: 500,
  //         baseQuantity: 1,
  //       },
  //     ],
  //     product: {
  //       nameKr: '카푸치노',
  //       nameEng: 'Cappuccino',
  //       isNewProduct: false,
  //       isHot: false,
  //       price: 5000,
  //     },
  //   },
  // ];
  // let wrapper;

  // beforeEach(async () => {
  //   wrapper = shallowMount(CartPage, {
  //     data() {
  //       return {
  //         orderList,
  //       };
  //     },
  //   });
  // });

  it('', () => {});
  // it('상품의 사진이 표시됩니다.', () => {
  //   console.log(wrapper.vm);
  //   const firstProductImage = wrapper.find('[data-test="product-image"]');

  //   expect(firstProductImage.attributes('src')).toEqual(orderList[0].imageUrl);
  //   expect(firstProductImage.attributes('alt')).toEqual(orderList[0].name);
  // });

  // it('상품의 한글 상품명이 표시됩니다.', () => {
  //   const firstProductName = wrapper.find('[data-test="product-name"]');

  //   expect(firstProductName.text()).toEqual(orderList[0].product.nameKr);
  // });

  // it('상품의 영문 상품명이 표시됩니다.', () => {
  //   const firstProductEngName = wrapper.find('[data-test="product-eng-name"]');

  //   expect(firstProductEngName.text()).toEqual(orderList[0].product.nameEng);
  // });

  // it('옵션 내역이 표시됩니다.', () => {
  //   const firstProductOption = wrapper.find('[data-test="product-option-name"]');

  //   expect(firstProductOption.text()).toEqual(optionsFormat(orderList[0]));
  // });

  // it('상품의 단일 가격이 표시됩니다.', () => {
  //   const firstProductPrice = wrapper.find('[data-test="product-price"]');

  //   expect(firstProductPrice.text()).toEqual(displayPrice(orderList[0].product.price));
  // });

  // it('퍼스널 옵션 이름이 표시됩니다.', () => {
  //   const firstPersonalOptionName = wrapper.find('[data-test="personal-option-name"]');

  //   expect(firstPersonalOptionName.text()).toEqual(orderList[0].options[0].name);
  // });

  // it('퍼스널 옵션 가격이 표시됩니다.', () => {
  //   const firstPersonalOptionPrice = wrapper.find('[data-test="personal-option-price"]');

  //   expect(firstPersonalOptionPrice.text()).toEqual(
  //     displayPrice(orderList[0].options[0].unitprice),
  //   );
  // });

  // it('상품의 합산 가격이 표시됩니다.', () => {
  //   const productTotalPrice = wrapper.find('[data-test="product-total-price"]');

  //   expect(productTotalPrice.text()).toEqual(displayPrice(totalPrice(orderList[0])));
  // });

  // it('장바구니의 총액이 표시됩니다.', async () => {
  //   const amountDue = wrapper.find('[data-test="amt-due"]');

  //   const mockAmountDue = orderList.reduce((acc, order) => acc + totalPrice(order), 0);

  //   expect(amountDue.text()).toEqual(displayPrice(mockAmountDue));
  // });
});
