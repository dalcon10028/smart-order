import { authInstance } from './instance';

export default {
  fetchCart() {
    return authInstance.get('/cart');
  },
  addCartItem(cartItem) {
    return authInstance.post('/cart', cartItem);
  },
  order() {
    return authInstance.post('/order');
  },
};
