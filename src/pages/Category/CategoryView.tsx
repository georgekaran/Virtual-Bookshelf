import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Grid } from '@material-ui/core';

import Search from '../../components/Search/Search';
import BookList from '../../components/BookList/BookList';
import enumCategories from '../../util/enum/categories';
import { Category } from '../../protocols';

export default function CategoryView() {
  const [category, setCategory] = useState<Category | null>(null)
  const [title, setTitle] = useState("")
  const { categoryName } = useParams();

  useEffect(() => {
    const currentCategory = enumCategories.find((c) => c.name === categoryName);
    if (currentCategory)
      setCategory(currentCategory);
  }, [categoryName])

  useEffect(() => {
    switch (category?.name) {
      case "others":
        setTitle("Livros que não estão em nehuma categoria")
        break;
        case "read":
        setTitle("Opa, aqui estão seus livros já lidos.")
        break;
        case "reading":
        setTitle("Estes livros você está lendo no momento.")
        break;
      case "wantToRead":
        setTitle("Abaixo estão os livros que você deseja ler.")
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
