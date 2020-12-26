import moment from 'moment';

export const getRandomDate = (start, end) => (
  moment(start + Math.random() * (end.diff(start)))
);

export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomArrayItem = (arr) => (
  arr[getRandomInt(0, arr.length - 1)]
);

export const getRandomObjectItem = (obj) => (
  getRandomArrayItem(Object.values(obj))
);

export const reverseObj = (obj) => (
  Object
    .entries(obj)
    .reduce((acc, entry) => {
      const [key, value] = entry;
      acc = { ...acc, [value]: key };
      return acc;
    }, {})
);

export const getKeyByValue = (obj, value) => (
  reverseObj(obj)[value].toLowerCase()
);

export const formatDates = (pattern, ...dates) => (
  dates.map(date => date.format(pattern))
);

export const getFormData = (form) => {
  const formData = new FormData(form);
  let res = {};
  for (const [key, value] of formData) {
    res = { ...res, [key]: value };
  }
  return res;
};
