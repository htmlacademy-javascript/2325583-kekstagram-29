/**
 * Проверит, подходит ли `value` по длине
 * @param {string} value
 * @param {number} maxLength
 * @returns {boolean}
 */
function fitsLength(value, maxLength) {
  return value.length <= maxLength;
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

fitsLength('string', 10);
isPalindrome('топот');
parseDigits('академия2023');
