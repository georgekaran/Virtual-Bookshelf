export interface Book {
  id: string
  timestamp: number
  title: string
  description: string
  author: string
  category: string | null
  deleted: boolean
  image: string | null
}