/**
 * 가격 표기 ex) 5000 => 5,000 원
 * @param {number} price
 * @returns {string}
 */

export const displayPrice = price => `${price.toLocaleString()} 원`;

/**
 *
 * @typedef {Object} Option
 * @property {number} quantity - 개수
 * @property {string} hotOrIce - 뜨거운|차가운 음료
 * @property {string} cupSize - 컵 사이즈
 * @property {string} cupType - 컵 종류
 * @property {any[]} personal - 퍼스널 옵션
 */

/**
 * 버티컬바로 구분한 옵션목록
 * @param {Option[]} options
 * @returns {string}
 */
export const optionsFormat = options =>
  Object.values(options)
    .filter(v => !Array.isArray(v))
    .join(' | ');
