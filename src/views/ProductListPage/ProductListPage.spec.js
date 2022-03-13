import { defineComponent } from 'vue';
import { mount, flushPromises, RouterLinkStub } from '@vue/test-utils';
import { ProductRepository } from '@/api';
import { displayPrice } from '@/utils/format';
import { ProductState } from '@/constant/product';
import ProductListPage from './ProductListPage.vue';

jest.mock('@/api', () => ({
  ProductRepository: {
    fetchProductList: jest.fn(() =>
      Promise.resolve({
        data: {
          category: '음료 카테고리',
          products: [
            {
              productNo: 1,
              nameKr: '카페 라떼',
              nameEng: 'Caffe Latte',
              isNewProduct: true,
              imgUrl:
                'https://projectlion-vue.s3.ap-northeast-2.amazonaws.com/items/cappuccino.jpg',
              price: 5000,
            },
          ],
        },
      }),
    ),
  },
}));

describe('ProductListPage.vue', () => {
  let wrapper;
  let mockProductList;

  beforeEach(async () => {
    const { data } = await ProductRepository.fetchProductList();
    mockProductList = data.products;

    const productListPageComponent = defineComponent({
      components: { ProductListPage },
      template: '<Suspense><ProductListPage /></Suspense>',
    });
    wrapper = mount(productListPageComponent, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });

    await flushPromises();
  });

  it('음료 목록 페이지 상단에는 현재 표시하고 있는 음료의 종류를 표시하는 공간이 존재합니다.', () => {
    const productType = wrapper.find('[data-test="product-type"]');

    expect(productType.text()).toEqual('음료 카테고리');
  });

  it('음료 목록 페이지에 표시되는 상품 정보에는 상품의 사진이 표시가 되어야 합니다.', () => {
    const firstProductImage = wrapper.find('[data-test="product-image"]');

    expect(firstProductImage.attributes('src')).toEqual(mockProductList[0].imgUrl);
    expect(firstProductImage.attributes('alt')).toEqual(mockProductList[0].nameKr);
  });

  it('음료 목록 페이지에 표시되는 상품 정보에는 상품의 상품명(한글)이 표시가 되어야 합니다.', () => {
    const firstProductName = wrapper.find('[data-test="product-name"]');

    expect(firstProductName.text()).toEqual(mockProductList[0].nameKr);
  });

  it('음료 목록 페이지에 표시되는 상품 정보에는 상품의 상품명(영문)이 표시가 되어야 합니다.', () => {
    const firstProductEngName = wrapper.find('[data-test="product-eng-name"]');

    expect(firstProductEngName.text()).toEqual(mockProductList[0].nameEng);
  });

  it('음료 목록 페이지에 표시되는 상품 정보에는 상품의 상품가격이 표시가 되어야 합니다.', () => {
    const firstProductPrice = wrapper.find('[data-test="product-price"]');

    expect(firstProductPrice.text()).toEqual(displayPrice(mockProductList[0].price));
  });

  it('만약 해당 상품이 신제품일 경우, 상품명 우측에 녹색 위첨자로 New가 표시되어야 합니다.', () => {
    const newProductIndex = mockProductList.findIndex(product => product.isNewProduct);

    const newProduct = wrapper.findAll('[data-test="product"]').at(newProductIndex);
    expect(newProduct.find('[data-test="product-state"]').text()).toEqual(ProductState.NEW);
  });

  it('만약 해당 상품이 인기 제품일 경우, 상품명 우측에 빨간색 위첨자로 Hot이 표시가 되어야 합니다.', () => {
    const hotProductIndex = mockProductList.findIndex(product => product.isHot);

    if (hotProductIndex !== -1) {
      const hotProduct = wrapper.findAll('[data-test="product"]').at(hotProductIndex);
      expect(hotProduct.find('[data-test="product-state"]').text()).toEqual(ProductState.HOT);
    }
  });
});
