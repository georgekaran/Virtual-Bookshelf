import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Grid } from '@material-ui/core';

import Search from '../../components/Search/Search';
import BookList from '../../components/BookList/BookList';
import { CategoryModel } from '../../protocols';
import Api from '../../util/api/api';

export default function CategoryView() {
  const [category, setCategory] = useState<CategoryModel>()
  const [title, setTitle] = useState("")
  const { categoryId } = useParams();

  const findCategory = () => {
    const categories = Api.Category.findAll()
    const currentCategory = categories.find(c => c.id === categoryId);
    if (currentCategory)
      setCategory(currentCategory);
  }

  useEffect(findCategory, [categoryId])

  useEffect(() => {
    switch (category?.name) {
      case "read":
        setTitle("Opa, aqui estão seus livros já lidos.")
        break;
      case "reading":
        setTitle("Estes livros você está lendo no momento.")
        break;
      case "wantToRead":
        setTitle("Abaixo estão os livros que você deseja ler.")
        break;
      default:
          setTitle("Livros que não estão em nehuma categoria")
        break;
    }
  }, [category])

  return (
    <Container fixed className={`Base__Container ${category?.name}`}>
      <Grid item xs={12}>
        {category && (
          <>
            <Search title={title} />
            <BookList category={category}
                      showButtonMore={false} />
          </>
        )}
      </Grid>
    </Container>
  );
}
