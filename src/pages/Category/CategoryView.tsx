import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Grid } from '@material-ui/core';

import Search from '../../components/Search/Search';
import BookList from '../../components/BookList/BookList';

export default function Category() {
  const { category } = useParams()

  return (
    <Container fixed className="Base__Container">
      <Grid item xs={12}>
        <Search />
        <BookList title="Outros Livros" />
      </Grid>
    </Container>
  );
}
