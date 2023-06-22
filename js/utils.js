/**
 * @param {number} min
 * @param {number} max
 * @returns {number} целое положительное
 */
function pickIntegerInRange(min, max) {
  const value = min + Math.random() * (max - min);

  return Math.round(value);
}

/**
 * @template T
 * @param {Array<T>} items
 * @returns {T}
 */
function pickItemFromArray(items) {
  const index = Math.floor(Math.random() * items.length);

  return items[index];
}

/**
 * Проверит, является ли `value` палиндромом.
 * @param {string | number} value
 * @returns {boolean}
 */
function isPalindrome(value) {
  const normalized = String(value).replaceAll(' ', '') .toLowerCase();
  const reversed = normalized.split('').reverse().join('');

  return normalized === reversed;
}

/**
 * Извлечет из `value` цифры
 * @param {string | number} value
 * @returns {number}
 */
function parseDigits(value) {
  const digits = String(value).replace(/[^0-9]+/g, '');

  return digits ? Number(digits) : NaN;
}

export {
  pickItemFromArray,
  pickIntegerInRange,
  isPalindrome,
  parseDigits,
};
