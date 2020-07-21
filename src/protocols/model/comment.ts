import { Entity } from "./entity";

export interface CommentModel extends Entity {
  parentId: string
  timestamp: number
  body: string
  author: string
}