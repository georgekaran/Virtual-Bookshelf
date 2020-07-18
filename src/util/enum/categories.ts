import { Category } from '../../protocols'

export const categories: Category[] = [{
  name: 'others',
  title: 'Outros livros'
}, {
  name: 'reading',
  title: 'Lendo'
}, {
  name: 'wantToRead',
  title: 'Quero ler'
}, {
  name: 'read',
  title: 'Lidos'
}]

export const categoriesOptions = categories.map(c => ({
  value: c.name,
  label: c.title
}))

export default categories