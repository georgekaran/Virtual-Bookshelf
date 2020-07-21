import { Entity } from "./entity";

export interface BookModel extends Entity {
  timestamp: number
  title: string
  description: string
  author: string
  category: string | null
  image: string | null
}