import { shallowMount } from '@vue/test-utils';
import Product from '@/views/ProductPage/ProductPage.vue';

describe('Product.vue', () => {
  const mockProduct = {
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Latte_art_3.jpg',
    title: '카페 라떼',
    state: 'BEST',
    discription:
      '풍부하고 진한 에스프레소가 신선한 스팀 밀크를 만나 부드러워진 커피 위에 우유 거품을 살짝 얹은 대표적인 카페 라떼',
    price: 5000,
    size_list: ['SHORT', 'TALL', 'GRANDE', 'VENTI'],
    personal_options: [{ name: '에스프레소 샷', price: 500, count: 1, defaultCount: 1 }],
  };
  it('음료 상세 정보 페이지의 최상단에는 음료의 사진이 표시가 되어야 합니다.', () => {
    const wrapper = shallowMount(Product);
    const productImage = wrapper.get('[data-test="product-image"]');

    expect(productImage.attributes('src')).toBe(mockProduct.image_url);
    expect(productImage.attributes('alt')).toBe(mockProduct.title);
  });

  it('공유를 위한 버튼이 있습니다.', () => {
    const wrapper = shallowMount(Product);
    const shareButton = wrapper.get('[data-test="share-button"]');

    expect(shareButton.exists()).toBeTruthy();
  });

  it('이전 페이지로 갈 수 있는 버튼이 있습니다.', () => {
    const wrapper = shallowMount(Product);
    const backButton = wrapper.get('[data-test="back-button"]');

    expect(backButton.exists()).toBeTruthy();
  });

  it('음료의 이름이 표시가 됩니다.', () => {
    const wrapper = shallowMount(Product);
    const productTitle = wrapper.get('[data-test="product-title"]');

    expect(productTitle.text()).toEqual(mockProduct.title);
  });

  it('음료들 중에는 인기 메뉴가 존재하며, 음료 이름의 우측에는 인기 메뉴 여부를 표시합니다.', () => {
    const wrapper = shallowMount(Product);
    const productState = wrapper.get('[data-test="product-state"]');

    expect(productState.exists()).toBeTruthy();
  });

  it('인기 메뉴일 경우 빨간색 글자로 “Best”가 표시가 되어야 합니다.', () => {
    const wrapper = shallowMount(Product);
    const productState = wrapper.get('[data-test="product-state"]');

    expect(productState.text()).toEqual('Best');
    expect(productState.classes()).toContain('text-red-600');
  });

  it('음료 이름 하단에는 음료에 대한 설명이 표시가 됩니다.', () => {
    const wrapper = shallowMount(Product);
    const productDiscription = wrapper.get('[data-test="product-discription"]');

    expect(productDiscription.text()).toEqual(mockProduct.discription);
  });

  it('음료 설명 하단에는 해당 음료의 단가가 표시가 됩니다.', () => {
    const wrapper = shallowMount(Product);
    const productPrice = wrapper.get('[data-test="product-price"]');
    const toWon = num => `${num.toLocaleString('ko-KR')} 원`;

    expect(productPrice.text()).toEqual(toWon(mockProduct.price));
  });

  it('2행 좌측에는 해당 음료를 찜할 수 있는 버튼이 존재합니다.', () => {
    const wrapper = shallowMount(Product);
    const wishButton = wrapper.get('[data-test="wish-button"]');

    expect(wishButton.exists()).toBeTruthy();
  });

  it('2행 우측에는 설정한 음료를 장바구니에 담을 수 있는 버튼이 존재합니다.', () => {
    const wrapper = shallowMount(Product);
    const cartButton = wrapper.get('[data-test="cart-button"]');

    expect(cartButton.exists()).toBeTruthy();
  });

  it('2행 우측에는 설정한 음료를 장바구니를 거치기 않고 바로 주문할 수 있는 버튼이 존재합니다.', () => {
    const wrapper = shallowMount(Product);
    const directOrderButton = wrapper.get('[data-test="direct-order-button"]');

    expect(directOrderButton.exists()).toBeTruthy();
  });

  it('1행 좌측에는 몇 잔 주문할지를 설정할 수 있는 컨트롤이 제공되어야 합니다.', () => {
    const wrapper = shallowMount(Product);
    const amountControl = wrapper.get('[data-test="amount-control"]');

    expect(amountControl.exists()).toBeTruthy();
  });

  it('1행 우측에는 퍼스널 옵션과 수량을 반영한 최종 가격이 표시가 되어야 합니다.', () => {
    const wrapper = shallowMount(Product);
    const totalPriceView = wrapper.get('[data-test="total-price"]');

    expect(totalPriceView.exists()).toBeTruthy();
  });

  it('계산식) ( 음료 단가 + 퍼스널 옵션 단가 * 퍼스널 옵션 갯수) * 음료 갯수', async () => {
    const wrapper = shallowMount(Product);
    const tatalPrice = wrapper.get('[data-test="total-price"]').text();

    expect(tatalPrice).toEqual(wrapper.vm.totalPrice);
  });
});
