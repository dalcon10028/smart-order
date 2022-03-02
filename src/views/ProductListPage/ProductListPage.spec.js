import { shallowMount, flushPromises } from '@vue/test-utils';
import { fetchProductList } from '@/api';
import { displayPrice } from '@/utils/format';
import { ProductState } from '@/constant/product';
import ProductListPage from './ProductListPage.vue';

describe('ProductListPage.vue', () => {
  let response;
  let wrapper;

  beforeEach(async () => {
    response = await fetchProductList();
    wrapper = shallowMount(ProductListPage);
    await flushPromises();
  });

  it('음료 목록 페이지 상단에는 현재 표시하고 있는 음료의 종류를 표시하는 공간이 존재합니다.', () => {
    const productType = wrapper.find('[data-test="product-type"]');

    expect(productType.text()).toEqual(response.productType);
  });

  it('음료 목록 페이지에 표시되는 상품 정보에는 상품의 사진이 표시가 되어야 합니다.', () => {
    const { productList } = response;
    const firstProductImage = wrapper.find('[data-test="product-image"]');

    expect(firstProductImage.attributes('src')).toEqual(productList[0].imageUrl);
    expect(firstProductImage.attributes('alt')).toEqual(productList[0].name);
  });

  it('음료 목록 페이지에 표시되는 상품 정보에는 상품의 상품명(한글)이 표시가 되어야 합니다.', () => {
    const { productList } = response;
    const firstProductName = wrapper.find('[data-test="product-name"]');

    expect(firstProductName.text()).toEqual(productList[0].name);
  });

  it('음료 목록 페이지에 표시되는 상품 정보에는 상품의 상품명(영문)이 표시가 되어야 합니다.', () => {
    const { productList } = response;
    const firstProductEngName = wrapper.find('[data-test="product-eng-name"]');

    expect(firstProductEngName.text()).toEqual(productList[0].engName);
  });

  it('음료 목록 페이지에 표시되는 상품 정보에는 상품의 상품가격이 표시가 되어야 합니다.', () => {
    const { productList } = response;
    const firstProductPrice = wrapper.find('[data-test="product-price"]');

    expect(firstProductPrice.text()).toEqual(displayPrice(productList[0].price));
  });

  it('만약 해당 상품이 신제품일 경우, 상품명 우측에 녹색 위첨자로 New가 표시되어야 합니다.', () => {
    const { productList } = response;
    const newProductIndex = productList.findIndex(product => product.isNew);

    const newProduct = wrapper.findAll('[data-test="product"]').at(newProductIndex);
    expect(newProduct.find('[data-test="product-state"]').text()).toEqual(ProductState.NEW);
  });

  it('만약 해당 상품이 인기 제품일 경우, 상품명 우측에 빨간색 위첨자로 Hot이 표시가 되어야 합니다.', () => {
    const { productList } = response;
    const hotProductIndex = productList.findIndex(product => product.isHot);

    const hotProduct = wrapper.findAll('[data-test="product"]').at(hotProductIndex);
    expect(hotProduct.find('[data-test="product-state"]').text()).toEqual(ProductState.HOT);
  });
});
