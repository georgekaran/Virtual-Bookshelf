export interface Comment {
  id: string
  parentId: string
  timestamp: number
  body: string
  author: string
  deleted: boolean
}