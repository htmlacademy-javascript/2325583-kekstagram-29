import { sliderContainer, effectSlider } from './import-form.js';

// @ts-ignore
noUiSlider.create (effectSlider, {
  start: [100],
  range: {min: [0], max: [100]}
});
