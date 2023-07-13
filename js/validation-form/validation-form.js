import {imageLoadForm, hashTagInput, commentInput, submitButton } from './import-form.js';
import { splitString } from '../utils.js';

const hashTagPattern = /^#[\wа-яё]{1,19}$/i;

const pristineConfig = {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  successClass: 'img-upload__field-wrapper--success',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__error',
  errorTextTag: 'div'
};

// @ts-ignore
const formValidator = new Pristine(imageLoadForm, pristineConfig);


imageLoadForm.addEventListener('input', () => {

  submitButton.toggleAttribute('disabled', !formValidator.validate());

});


/**
 * валидирует поле ввода на количество хештегов
 * @returns {boolean}
 */
const hashTagCountValidate = () => splitString(hashTagInput.value).length <= 5;

/**
 * валидирует поле ввода на соответствие шаблону
 * @returns {boolean}
 */
const hashTagPatternValidate = () => splitString(hashTagInput.value).every((element) => hashTagPattern.test(element));


/**
 * Валидириует полее ввода на повторы
 * @returns {boolean}
 */
const hashTagRepeatingValidate = () => splitString(hashTagInput.value).every((element) => splitString(hashTagInput.value).indexOf(element) === splitString(hashTagInput.value).lastIndexOf(element));

/**
 * Валидириует комментарии
 * @returns {boolean}
 */
const commentValidate = () => commentInput.value.length <= 140;

formValidator.addValidator(hashTagInput, hashTagCountValidate, 'Число хеш-тегов превышено!', 1, true);
formValidator.addValidator(hashTagInput, hashTagPatternValidate, 'Введите хеш-тег по типу #вашхештег', 1, true);
formValidator.addValidator(hashTagInput, hashTagRepeatingValidate, 'Хеш-теги повторяются!', 1, true);
formValidator.addValidator(commentInput, commentValidate, 'Ваш комментарий слишком длинный!', 1, true);

imageLoadForm.addEventListener('reset', () => {

  formValidator.reset();

});

export {formValidator};
