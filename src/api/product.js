import { instance } from './instance';

export const fetchProductList = () => instance.get('/product');

export const fetchProduct = productNo => instance.get(`/product/${productNo}`);
