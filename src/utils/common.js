import moment from 'moment';

export const getRandomDate = (start, end) => moment(start + Math.random() * (end.diff(start)));

export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomArrayItem = (arr) => arr[getRandomInt(0, arr.length - 1)];
