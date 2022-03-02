import { instance } from './instance';

export default {
  fetchProductList() {
    return instance.get('/product');
  },
  fetchProduct(productNo) {
    return instance.get(`/product/${productNo}`);
  },
};
