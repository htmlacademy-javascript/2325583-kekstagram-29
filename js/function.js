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

// функция по извлеканию цифр из строки (не совсем понял честно сказать)
function TakeDigits(string) {
  const AnyNumber = /\d/g; //взял с интернета d g
  const digits = string.match(AnyNumber);

  if (digits === null) {
    return NaN;
  }
  return parseInt(digits.join(''), 10);
}

checkStringLength();
isTruePalindrome();
TakeDigits();
