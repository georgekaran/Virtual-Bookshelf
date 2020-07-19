import isEmpty from 'lodash/isEmpty';

import { Category, Entity, Endpoint, Book } from '../../protocols';
import { initDataApi } from '../initData';
import { categoryKey, bookKey } from '../consts';

type LocalStorageKeys = '_virtual_bookshelf_category' | '_virtual_bookshelf_book' | '_virtual_bookshelf_comments';

const getEndpointData = (key: LocalStorageKeys): Entity[] => {
  if (!localStorage.getItem(key)) {
    initDataApi();
  }
  let data = JSON.parse(localStorage.getItem(key) || '[]');
  return data;
};

const setEndpointData = (key: LocalStorageKeys, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};

abstract class BaseEndpoint<T extends Entity> implements Endpoint<T> {
  constructor(private key: LocalStorageKeys) {}

  find(id: string) {
    let data = getEndpointData(this.key);
    if (!isEmpty(data)) {
      return data.find((c) => c.id === id) as T;
    }
    return null;
  }

  findAll() {
    let data = getEndpointData(this.key);
    return data as T[];
  }

  save(entity: T) {
    let data = getEndpointData(this.key);
    console.log(data);

    const entityIndex = data.findIndex((c) => c.id === entity.id);
    if (entityIndex !== -1) {
      data[entityIndex] = entity;
    } else {
      data.push(entity);
    }
    console.log(data);

    setEndpointData(this.key, data);
  }

  delete(entity: T) {
    let data = getEndpointData(this.key);
    const newData = data.filter(t => t.id !== entity.id);
    setEndpointData(this.key, newData);
  }
}

class CategoryRepository extends BaseEndpoint<Category> {
  constructor() {
    super(categoryKey)
  }
}

class BookRepository extends BaseEndpoint<Book> {
  constructor() {
    super(bookKey)
  }
}

class Api {
  public static Category = new CategoryRepository()
  public static Book = new BookRepository()
}

export default Api;
