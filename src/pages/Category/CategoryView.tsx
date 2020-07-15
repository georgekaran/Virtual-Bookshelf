import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Grid, Box } from '@material-ui/core';

import Search from '../../components/Search/Search';
import BookList from '../../components/BookList/BookList';
import enumCategories from '../../util/enum/categories';

export default function Category() {
  const { categoryName } = useParams();

  const currentCategory = enumCategories.find((c) => c.name === categoryName);
  if (!currentCategory) {
    return <Box>Categoria não encontrada :(</Box>;
  }

  return (
    <Container fixed className="Base__Container">
      <Grid item xs={12}>
        <Search />
        <BookList category={currentCategory}
                  showButtonMore={false} />
      </Grid>
    </Container>
  );
}
