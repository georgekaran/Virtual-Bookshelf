import isEmpty from 'lodash/isEmpty';

import { bookKey, categoryKey, commentsKey } from './consts';

const categoriesDefaultData = [
  {
    id: null,
    name: 'others',
    title: 'No category',
  },
  {
    id: '1',
    name: 'reading',
    title: 'Reading',
  },
  {
    id: '2',
    name: 'wantToRead',
    title: 'Want to read',
  },
  {
    id: '3',
    name: 'read',
    title: 'Read',
  },
];

const booksDefaultData: Array<any> = [];

const commentsDefaultData: Array<any> = [];

export const initDataApi = () => {
  let books = localStorage.getItem(bookKey);
  if (isEmpty(books)) {
    localStorage.setItem(bookKey, JSON.stringify(booksDefaultData));
  }

  let categories = localStorage.getItem(categoryKey);
  if (isEmpty(categories)) {
    localStorage.setItem(categoryKey, JSON.stringify(categoriesDefaultData));
  }
  
  let comments = localStorage.getItem(commentsKey);
  if (isEmpty(comments)) {
    localStorage.setItem(commentsKey, JSON.stringify(commentsDefaultData));

  }
};
