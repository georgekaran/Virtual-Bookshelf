export interface Comment {
  id: string
  parentId: string
  timestamp: number
  body: string
  description: string
  author: string
  deleted: boolean
}