import {pickItemFromArray, pickIntegerInRange} from './utils.js';

const descriptions = [
  'описание 1',
  'описание 2',
  'описание 3',
];

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const names = [
  'Александр',
  'Петр',
  'Василий',
  'Денис',
  'Анастасия'
];
/**
 * @param {number} [length]
 * @returns {Array<Picture>}
 */
function createPictureArray(length = 25) {
  const items = new Array(length).fill(1);

  return items.map((start, index) => createPicture(start + index));
}

createPictureArray();

/**
 * @param {number} id
 * @returns {Picture}
 */
function createPicture(id) {
  const url = `photos/${id}.jpg`;
  const description = pickItemFromArray(descriptions);
  const likes = pickIntegerInRange(15, 200);
  const comments = createPictureCommentArray(pickIntegerInRange(0, 30));

  return {id, url, description, likes, comments};
}

/**
 * Генерирует от 0 до 30 случайных комментариев
 * @param {number} length
 * @returns {Array<PictureComment>}
 */
function createPictureCommentArray(length) {
  const items = new Array(length).fill(1);

  return items.map((start, index) => createPictureComment(start + index));
}

/**
 * @param {number} id
 * @returns {PictureComment}
 */
function createPictureComment(id) {
  const avatar = `img/avatar-${pickIntegerInRange(1, 6)}.svg`;
  const message = pickItemFromArray(messages);
  const name = pickItemFromArray(names);

  return {id, avatar, message, name};
}

/**
 * Проверит, подходит ли `value` по длине
 * @param {string} value
 * @param {number} maxLength
 * @returns {boolean}
 */
function fitsLength(value, maxLength) {
  return value.length <= maxLength;
}

fitsLength('string', 10);


export default createPictureArray;
