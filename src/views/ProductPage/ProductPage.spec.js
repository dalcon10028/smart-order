// import { shallowMount, flushPromises } from '@vue/test-utils';
// import { useRoute } from 'vue-router';
// import ProductPage from './ProductPage.vue';

describe('ProductPage.vue', () => {
  // let router;
  // const product = {
  //   productNo: 1,
  //   nameKr: '카페 라떼',
  //   nameEng: 'Caffe Latte',
  //   description:
  //     '풍부하고 진한 에스프레소가 신선한 스팀 밀크를 만나 부드러워진 커피 위에 우유 거품을 살짝 얹은 대표적인 카페 라떼',
  //   isNewProduct: true,
  //   isHot: false,
  //   imgUrl: 'https://projectlion-vue.s3.ap-northeast-2.amazonaws.com/items/cappuccino.jpg',
  //   price: 5000,
  //   category: 1,
  //   options: [
  //     {
  //       name: '에스프레소 샷',
  //       unitprice: 500,
  //       baseQuantity: 1,
  //       optionNo: 1,
  //     },
  //   ],
  //   cupSizes: [
  //     {
  //       name: 'Short',
  //       iconSize: 'text-sm',
  //       optionNo: 1,
  //     },
  //     {
  //       optionNo: 2,
  //       name: 'Tall',
  //       iconSize: 'text-md',
  //     },
  //   ],
  // };
  // const order = {
  //   quantity: 1,
  //   hotOrIce: '',
  //   cupSize: '',
  //   cupType: '',
  //   personalOptions: [],
  //   totalPrice: 5000,
  // };
  // jest.mock('vue-router', () => ({
  //   useRoute: jest.fn(),
  //   useRouter: jest.fn(() => ({
  //     push: () => {},
  //   })),
  // }));
  // beforeEach(async () => {
  //   useRoute.mockImplementationOnce(() => ({
  //     params: {
  //       id: 1,
  //     },
  //   }));
  // });
  // it('음료 상세 정보 페이지의 최상단에는 음료의 사진이 표시가 되어야 합니다.', async () => {
  //   const wrapper = shallowMount(ProductPage, {
  //     global: {
  //       stubs: ['router-link', 'router-view'],
  //     },
  //   });
  //   await flushPromises();
  //   const productImage = wrapper.find('[data-test="product-image"]');
  //   expect(productImage.attributes('src')).toBe(product.imgUrl);
  //   expect(productImage.attributes('alt')).toBe(product.nameKr);
  // });
  // it('공유를 위한 버튼이 있습니다.', () => {
  //   const wrapper = shallowMount(ProductPage);
  //   const shareButton = wrapper.get('[data-test="share-button"]');
  //   expect(shareButton.exists()).toBeTruthy();
  // });
  // it('이전 페이지로 갈 수 있는 버튼이 있습니다.', () => {
  //   const wrapper = shallowMount(ProductPage);
  //   const backButton = wrapper.get('[data-test="back-button"]');
  //   expect(backButton.exists()).toBeTruthy();
  // });
  // it('음료의 이름이 표시가 됩니다.', async () => {
  //   const wrapper = shallowMount(ProductPage, {
  //     global: {
  //       plugins: [router],
  //     },
  //     data() {
  //       return {
  //         product,
  //         order,
  //       };
  //     },
  //   });
  //   await flushPromises();
  //   const productTitle = wrapper.get('[data-test="product-title"]');
  //   expect(productTitle.text()).toEqual(product.nameKr);
  // });
  // it('음료들 중에는 인기 메뉴가 존재하며, 음료 이름의 우측에는 인기 메뉴 여부를 표시합니다.', async () => {
  //   const wrapper = shallowMount(ProductPage);
  //   await flushPromises();
  //   const productState = wrapper.get('[data-test="product-state"]');
  //   expect(productState.exists()).toBeTruthy();
  // });
  // it('인기 메뉴일 경우 빨간색 글자로 “Best”가 표시가 되어야 합니다.', async () => {
  //   const wrapper = shallowMount(ProductPage);
  //   await flushPromises();
  //   const productState = wrapper.get('[data-test="product-state"]');
  //   expect(productState.text()).toEqual('Best');
  //   expect(productState.classes()).toContain('text-red-600');
  // });
  // it('음료 이름 하단에는 음료에 대한 설명이 표시가 됩니다.', async () => {
  //   const wrapper = shallowMount(ProductPage, {
  //     global: {
  //       plugins: [router],
  //     },
  //   });
  //   await flushPromises();
  //   const productDiscription = wrapper.get('[data-test="product-discription"]');
  //   expect(productDiscription.text()).toEqual(product.discription);
  // });
  // it('음료 설명 하단에는 해당 음료의 단가가 표시가 됩니다.', async () => {
  //   const wrapper = shallowMount(ProductPage, {
  //     global: {
  //       plugins: [router],
  //     },
  //   });
  //   await flushPromises();
  //   const productPrice = wrapper.get('[data-test="product-price"]');
  //   const displayPrice = price => `${price.toLocaleString()} 원`;
  //   expect(productPrice.text()).toEqual(displayPrice(product.price));
  // });
  // it('2행 좌측에는 해당 음료를 찜할 수 있는 버튼이 존재합니다.', () => {
  //   const wrapper = shallowMount(ProductPage);
  //   const wishButton = wrapper.get('[data-test="wish-button"]');
  //   expect(wishButton.exists()).toBeTruthy();
  // });
  // it('2행 우측에는 설정한 음료를 장바구니에 담을 수 있는 버튼이 존재합니다.', () => {
  //   const wrapper = shallowMount(ProductPage);
  //   const cartButton = wrapper.get('[data-test="cart-button"]');
  //   expect(cartButton.exists()).toBeTruthy();
  // });
  // it('2행 우측에는 설정한 음료를 장바구니를 거치기 않고 바로 주문할 수 있는 버튼이 존재합니다.', () => {
  //   const wrapper = shallowMount(ProductPage);
  //   const directOrderButton = wrapper.get('[data-test="direct-order-button"]');
  //   expect(directOrderButton.exists()).toBeTruthy();
  // });
  // it('1행 좌측에는 몇 잔 주문할지를 설정할 수 있는 컨트롤이 제공되어야 합니다.', () => {
  //   const wrapper = shallowMount(ProductPage);
  //   const amountControl = wrapper.get('[data-test="amount-control"]');
  //   expect(amountControl.exists()).toBeTruthy();
  // });
  // it('1행 우측에는 퍼스널 옵션과 수량을 반영한 최종 가격이 표시가 되어야 합니다.', () => {
  //   const wrapper = shallowMount(ProductPage);
  //   const totalPriceView = wrapper.get('[data-test="total-price"]');
  //   expect(totalPriceView.exists()).toBeTruthy();
  // });
  // it('계산식) ( 음료 단가 + 퍼스널 옵션 단가 * 퍼스널 옵션 갯수) * 음료 갯수', async () => {
  //   const displayPrice = price => `${price.toLocaleString()} 원`;
  //   const wrapper = shallowMount(ProductPage, {
  //     global: {
  //       plugins: [router],
  //     },
  //   });
  //   await flushPromises();
  //   const totalPrice = wrapper.get('[data-test="total-price"]').text();
  //   expect(totalPrice).toEqual(displayPrice(product.price));
  // });
  it('', () => {});
});
