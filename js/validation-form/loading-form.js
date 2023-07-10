import { showPopup } from '../popup.js';
import { loadNewButton, loadNewPopup, imageLoadForm } from './import-form.js';
import { formValidator } from './validation-form.js';
import { resetScale } from './scaling-form.js';
import './slider-form.js';


loadNewButton.addEventListener('change', () => {

  showPopup(loadNewPopup);

});

imageLoadForm.addEventListener('reset', () => {
  resetScale();
  formValidator.reset();
});

imageLoadForm.addEventListener('popup::hide', () => {
  imageLoadForm.reset();
}, true);
