import { User } from "./user";
import { CommentModel } from "./model/comment";

export interface RootState {
  user: User
  comments: CommentModel[]
  search: string
  sort: string
}