import { Entity } from "./entity";

export interface Category extends Entity {
  id: string
  name: string
  title: string
}