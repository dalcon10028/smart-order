import { instance } from './instance';

export const fetchCart = () => instance.get('/cart');

export const addCartItem = cartItem => instance.post('/', cartItem);
