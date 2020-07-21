import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';

import Search from '../../components/Search/Search';
import BookList from '../../components/BookList/BookList';
import { CategoryModel } from '../../protocols';
import Api from '../../util/api/api';

export default function Home() {
  const [categories, setCategories] = useState<CategoryModel[]>([]);

  const fetchCategories = () => {
    setCategories(Api.Category.findAll())
  }

  useEffect(fetchCategories, [])

  return (
    <Container fixed className="Base__Container">
      <Grid item xs={12}>
        <Search title={"Find the best books in each category."} />
        {categories.map((category) => (
          <BookList key={category.name}
                    category={category}
                    limit={6} />
        ))}
      </Grid>
    </Container>
  );
}
