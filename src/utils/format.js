import { ProductTemperature } from '@/constant/product';

/**
 * 가격 표기 ex) 5000 => 5,000 원
 * @param {Number} price
 * @returns {String}
 */

export const displayPrice = price => `${price.toLocaleString()} 원`;

/**
 *
 * @typedef {Object} Order
 * @property {Number} quantity - 개수
 * @property {Object} cupSize - 컵 사이즈
 * @property {Object} product - 상품정보
 * @property {Object} options - 퍼스널 옵션
 */

/**
 * 버티컬바로 구분한 옵션목록
 * @param {Order} order
 * @returns {string}
 */
export const optionsFormat = order => {
  const {
    cupSize: { name },
    product: { isHot },
  } = order;
  return [name, isHot ? ProductTemperature.HOT : ProductTemperature.ICE].join(' | ');
};
