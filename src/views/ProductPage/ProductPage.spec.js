import { defineComponent } from 'vue';
import { mount, flushPromises } from '@vue/test-utils';
import { ProductRepository } from '@/api';
import { displayPrice } from '@/utils/format';
import ProductPage from './ProductPage.vue';

jest.mock('vue-router', () => ({
  useRoute: jest.fn(() => ({
    params: 1,
  })),
  useRouter: jest.fn(() => ({
    go: () => {},
  })),
}));

jest.mock('@/api', () => ({
  ProductRepository: {
    fetchProduct: jest.fn(() =>
      Promise.resolve({
        data: {
          product: {
            productNo: 4,
            nameKr: '핑크 매그놀리아 레모네이드',
            nameEng: 'Pink Magnolia Lemonade',
            description:
              '블론드 에스프레소의 밝고 경쾌한 풍미를 블론드 카페 아메리카노로 즐겨보세요',
            isNewProduct: true,
            isHot: true,
            imgUrl: 'https://projectlion-vue.s3.ap-northeast-2.amazonaws.com/items/cappuccino.jpg',
            price: 6100,
            category: 2,
            options: [
              {
                name: '클래식 시럽',
                unitprice: 0,
                baseQuantity: 2,
                optionNo: 6,
              },
            ],
            cupSizes: [
              {
                optionNo: 3,
                name: 'Grande',
                iconSize: 'text-lg',
              },
            ],
          },
        },
      }),
    ),
  },
  OrderRepository: {
    addCartItem: jest.fn(),
  },
}));

describe('ProductPage.vue', () => {
  let wrapper;
  let mockProduct;

  beforeEach(async () => {
    const { data } = await ProductRepository.fetchProduct();
    mockProduct = data.product;

    const productPageComponent = defineComponent({
      components: { ProductPage },
      template: '<Suspense><ProductPage /></Suspense>',
    });
    wrapper = mount(productPageComponent);

    await flushPromises();
  });

  it('음료 상세 정보 페이지의 최상단에는 음료의 사진이 표시가 되어야 합니다.', () => {
    const productImage = wrapper.find('[data-test="product-image"]');
    expect(productImage.attributes('src')).toBe(mockProduct.imgUrl);
    expect(productImage.attributes('alt')).toBe(mockProduct.nameKr);
  });

  it('공유를 위한 버튼이 있습니다.', () => {
    const shareButton = wrapper.get('[data-test="share-button"]');
    expect(shareButton.exists()).toBeTruthy();
  });

  it('이전 페이지로 갈 수 있는 버튼이 있습니다.', () => {
    const backButton = wrapper.get('[data-test="back-button"]');
    expect(backButton.exists()).toBeTruthy();
  });

  it('음료의 이름이 표시가 됩니다.', () => {
    const productTitle = wrapper.get('[data-test="product-title"]');
    expect(productTitle.text()).toEqual(mockProduct.nameKr);
  });

  it('음료들 중에는 인기 메뉴가 존재하며, 음료 이름의 우측에는 인기 메뉴 여부를 표시합니다.', () => {
    const productState = wrapper.get('[data-test="product-state"]');
    expect(productState.exists()).toBeTruthy();
  });

  it('인기 메뉴일 경우 빨간색 글자로 “Best”가 표시가 되어야 합니다.', () => {
    const productState = wrapper.get('[data-test="product-state"]');
    expect(productState.text()).toEqual('Best');
    expect(productState.classes()).toContain('text-red-600');
  });

  it('음료 이름 하단에는 음료에 대한 설명이 표시가 됩니다.', () => {
    const productDescription = wrapper.get('[data-test="product-description"]');
    expect(productDescription.text()).toEqual(mockProduct.description);
  });

  it('음료 설명 하단에는 해당 음료의 단가가 표시가 됩니다.', () => {
    const productPrice = wrapper.get('[data-test="product-price"]');
    expect(productPrice.text()).toEqual(displayPrice(mockProduct.price));
  });

  it('2행 좌측에는 해당 음료를 찜할 수 있는 버튼이 존재합니다.', () => {
    const wishButton = wrapper.get('[data-test="wish-button"]');
    expect(wishButton.exists()).toBeTruthy();
  });

  it('2행 우측에는 설정한 음료를 장바구니에 담을 수 있는 버튼이 존재합니다.', () => {
    const cartButton = wrapper.get('[data-test="cart-button"]');
    expect(cartButton.exists()).toBeTruthy();
  });

  it('2행 우측에는 설정한 음료를 장바구니를 거치기 않고 바로 주문할 수 있는 버튼이 존재합니다.', () => {
    const directOrderButton = wrapper.get('[data-test="direct-order-button"]');
    expect(directOrderButton.exists()).toBeTruthy();
  });

  it('1행 좌측에는 몇 잔 주문할지를 설정할 수 있는 컨트롤이 제공되어야 합니다.', () => {
    const amountControl = wrapper.get('[data-test="amount-control"]');
    expect(amountControl.exists()).toBeTruthy();
  });

  it('1행 우측에는 퍼스널 옵션과 수량을 반영한 최종 가격이 표시가 되어야 합니다.', () => {
    const totalPriceView = wrapper.get('[data-test="total-price"]');
    expect(totalPriceView.exists()).toBeTruthy();
  });

  it('계산식) ( 음료 단가 + 퍼스널 옵션 단가 * 퍼스널 옵션 갯수) * 음료 갯수', () => {
    const totalPrice = wrapper.get('[data-test="total-price"]').text();
    expect(totalPrice).toEqual('6,100 원');
  });
});
