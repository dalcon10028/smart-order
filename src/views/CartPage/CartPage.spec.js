import { shallowMount, mount, flushPromises } from '@vue/test-utils';
import { fetchCart } from '@/api';
import { displayPrice, optionsFormat } from '@/utils/format';
import CartPage from './CartPage.vue';

describe('CartPage.vue', () => {
  it('상품의 사진이 표시됩니다.', async () => {
    const productList = await fetchCart();
    const wrapper = shallowMount(CartPage);
    await flushPromises();
    const firstProductImage = wrapper.find('[data-test="product-image"]');

    expect(firstProductImage.attributes('src')).toEqual(productList[0].imageUrl);
    expect(firstProductImage.attributes('alt')).toEqual(productList[0].name);
  });

  it('상품의 한글 상품명이 표시됩니다.', async () => {
    const productList = await fetchCart();
    const wrapper = shallowMount(CartPage);
    await flushPromises();
    const firstProductName = wrapper.find('[data-test="product-name"]');

    expect(firstProductName.text()).toEqual(productList[0].name);
  });

  it('상품의 영문 상품명이 표시됩니다.', async () => {
    const productList = await fetchCart();
    const wrapper = shallowMount(CartPage);

    await flushPromises();
    const firstProductEngName = wrapper.find('[data-test="product-eng-name"]');

    expect(firstProductEngName.text()).toEqual(productList[0].engName);
  });

  it('옵션 내역이 표시됩니다.', async () => {
    const productList = await fetchCart();
    const wrapper = shallowMount(CartPage);
    await flushPromises();
    const firstProductOption = wrapper.find('[data-test="product-option-name"]');

    expect(firstProductOption.text()).toEqual(optionsFormat(productList.options));
  });

  it('상품의 단일 가격이 표시됩니다.', async () => {
    const productList = await fetchCart();
    const wrapper = shallowMount(CartPage);
    await flushPromises();
    const firstProductPrice = wrapper.find('[data-test="product-price"]');

    expect(firstProductPrice.text()).toEqual(displayPrice(productList[0].price));
  });

  it('퍼스널 옵션 이름이 표시됩니다.', async () => {
    const productList = await fetchCart();
    const wrapper = shallowMount(CartPage);
    await flushPromises();
    const firstPersonalOptionName = wrapper.find('[data-test="personal-option-name"]');

    expect(firstPersonalOptionName.text()).toEqual(productList[0].options.personal[0].name);
  });

  it('퍼스널 옵션 가격이 표시됩니다.', async () => {
    const productList = await fetchCart();
    const wrapper = shallowMount(CartPage);
    await flushPromises();
    const firstPersonalOptionPrice = wrapper.find('[data-test="personal-option-name"]');

    expect(firstPersonalOptionPrice.text()).toEqual(
      displayPrice(productList[0].options.personal[0].unitPrice),
    );
  });

  it('상품의 합산 가격이 표시됩니다.', async () => {
    const productList = await fetchCart();
    const wrapper = shallowMount(CartPage);
    await flushPromises();
    const productTotalPrice = wrapper.find('[data-test="product-total-price"]');

    const {
      price,
      quantity,
      options: { personal },
    } = productList[0];
    const mockTotalPrice =
      price * quantity + personal.reduce((acc, pn) => acc + pn.quantity * pn.unitPrice, 0);

    expect(productTotalPrice.text()).toEqual(displayPrice(mockTotalPrice));
  });

  it('장바구니의 총액이 표시됩니다.', async () => {
    const productList = await fetchCart();
    const wrapper = mount(CartPage);
    await flushPromises();
    const amountDue = wrapper.find('[data-test="amt-due"]');

    const mockAmountDue = productList.reduce((acc, { price, quantity, options: { personal } }) => {
      const mockTotalPrice =
        price * quantity +
        personal.reduce((pAcc, { quantity: pQty, unitPrice: pUpc }) => pAcc + pQty * pUpc, 0);

      return acc + price * quantity + mockTotalPrice;
    }, 0);

    expect(amountDue.text()).toEqual(displayPrice(mockAmountDue));
  });
});
