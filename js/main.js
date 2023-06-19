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

const Names = [
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

/**
 * @param {number} id
 * @returns {Picture}
 */
function createPicture(id) {
  const url = `photos/${id}.jpg`;
  const description = pickItemFromArray(descriptions);
  const likes = pickIntegerInRange(15, 200);
  const comments = createPictureCommentArray();

  return {id, url, description, likes, comments};
}

console.log(createPictureArray());

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
 * @param {number} min
 * @param {number} max
 * @returns {number} целое положительное
 */
function pickIntegerInRange(min, max) {
  const value = min + Math.random() * (max - min);

  return Math.round(value);
}

/**
 * @returns {PictureComment}
 */
function createPictureComment() {
  const avatar = `img/avatar-${pickIntegerInRange(1, 6)}.svg`;
  const message = pickItemFromArray(messages);
  const name = pickItemFromArray(Names);

  return {avatar, message, name};
}

console.log(createPictureComment());

/**
 * Генерирует от 0 до 30 случайных комментариев
 * @returns {Array<PictureComment>}
 */
function createPictureCommentArray(length = pickIntegerInRange(0, 30)) {
  const items = new Array(length).fill(1);

  return items.map((start, index) => createPictureComment(start + index));
}


