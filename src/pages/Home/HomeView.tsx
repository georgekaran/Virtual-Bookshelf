import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Search from '../../components/Search/Search';
import BookList from '../../components/BookList/BookList';

export default function Home() {
  return (
    <Container fixed className="Base__Container">
      <Grid item xs={12}>
        <Search />
        <BookList title="Outros Livros" />
        <BookList title="Lendo" />
        <BookList title="Quero ler" />
        <BookList title="Lidos" />
      </Grid>
    </Container>
  );
}
