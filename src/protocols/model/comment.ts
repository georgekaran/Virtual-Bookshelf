import { Entity } from "./entity";

export interface CommentModel extends Entity {
  id: string
  parentId: string
  timestamp: number
  body: string
  author: string
  deleted: boolean
}