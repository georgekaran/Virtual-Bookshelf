import React, { useState } from 'react';
import { Container, Grid } from '@material-ui/core';

import Search from '../../components/Search/Search';
import BookList from '../../components/BookList/BookList';
import enumCategories from '../../util/enum/categories';
import { Category } from '../../protocols';

export default function Home() {
  const [categories] = useState<Category[]>(enumCategories);

  return (
    <Container fixed className="Base__Container">
      <Grid item xs={12}>
        <Search />
        {categories.map((category) => (
          <BookList key={category.name}
                    category={category} />
        ))}
      </Grid>
    </Container>
  );
}
