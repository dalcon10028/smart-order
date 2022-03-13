import { authInstance } from './instance';

export default {
  fetchProductList() {
    return authInstance.get('/product');
  },
  fetchProduct(productNo) {
    return authInstance.get(`/product/${productNo}`);
  },
};
