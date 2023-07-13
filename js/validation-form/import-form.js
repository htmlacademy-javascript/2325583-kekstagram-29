export const loadNewButton = /**@type {HTMLInputElement} */(document.querySelector('.img-upload__input'));
export const imageLoadForm = /** @type {HTMLFormElement} */(document.querySelector('.img-upload__form'));
export const hashTagInput = /** @type {HTMLInputElement} */(imageLoadForm.querySelector('.text__hashtags'));
export const commentInput = /** @type {HTMLTextAreaElement} */(imageLoadForm.querySelector('.text__description'));
export const submitButton = /** @type {HTMLButtonElement} */(imageLoadForm.querySelector('.img-upload__submit'));
export const pictureImage = /** @type {HTMLImageElement} */(imageLoadForm.querySelector('.img-upload__preview img'));
export const loadNewPopup = document.querySelector('.img-upload__overlay');
export const scaleInput = imageLoadForm.querySelector('.scale__control--value');
export const scaleSmaller = imageLoadForm.querySelector('.scale__control--smaller');
export const scaleBigger = imageLoadForm.querySelector('.scale__control--bigger');

export const effectSlider = imageLoadForm.querySelector('.effect-level__slider');
