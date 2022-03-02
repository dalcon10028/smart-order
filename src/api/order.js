import { instance } from './instance';

export default {
  fetchCart() {
    return instance.get('/cart');
  },
  addCartItem(cartItem) {
    return instance.post('/', cartItem);
  },
};
