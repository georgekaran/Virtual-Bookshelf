import { Entity } from './entity';

export interface Endpoint<T extends Entity> {
  find(id: string): T | null;
  findAll(): T[] | [];
  save(entity: T): void
  delete(entity: T): void
}