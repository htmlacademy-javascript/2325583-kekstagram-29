// длина строки
function checkStringLength(string, maxLength) {
  const maximumLength = maxLength;
  const length = string.length;
  if (length <= maximumLength) {
    return true;
  } else {
    return false;
  }
}

console.log(checkStringLength('проверяемая строка', 20));
console.log(checkStringLength('проверяемая строка', 18));
console.log(checkStringLength('проверяемая строка', 10));

// проверка палиндрома
function isTruePalindrome(string) {
  string = string.replaceAll(' ','');
  string = string.toLowerCase();

  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isTruePalindrome('топот'));
console.log(isTruePalindrome('ДовОд'));
console.log(isTruePalindrome('Кекс'));

// функция по извлеканию цифр из строки (не совсем понял честно сказать)
function TakeDigits(string) {
  const AnyNumber = /\d/g; //взял с интернета d g
  const digits = string.match(AnyNumber);

  if (digits === null) {
    return NaN;
  }
  return parseInt(digits.join(''), 10);
}

console.log(TakeDigits('2023 год'));
console.log(TakeDigits('ECMAScript 2022'));
console.log(TakeDigits('1 кефир, 0.5 батона'));
console.log(TakeDigits('агент 007'));
console.log(TakeDigits('а я томат'));
