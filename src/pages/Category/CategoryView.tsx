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
        setTitle("Here are your books already read.")
        break;
      case "reading":
        setTitle("These books you are currently reading.")
        break;
      case "wantToRead":
        setTitle("Below are the books you want to read.")
        break;
      default:
          setTitle("Books that are not in any category.")
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
