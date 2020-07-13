import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Search from '../../components/Search/Search';

export default function Home() {
  return (
    <Container fixed className="Base__Container">
      <Grid item xs={12}>
        <Search />
        <Button className="BtnPrimary">Adicionar livro</Button>
      </Grid>
    </Container>
  );
}
