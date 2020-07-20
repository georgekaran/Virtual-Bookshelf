import { Entity } from "./entity";

export interface BookModel extends Entity {
  id: string
  timestamp: number
  title: string
  description: string
  author: string
  category: string | null
  deleted: boolean
  image: string | null
}