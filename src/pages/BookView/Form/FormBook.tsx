import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers';
import { Container, Grid, Box, Typography, Button } from '@material-ui/core';

import Dropzone from '../../../components/Dropzone/Dropzone';
import Input from '../../../components/Form/Input/Input';
import Select from '../../../components/Form/Select/Select';

import Api from '../../../util/api/api'
import { Option, Book } from '../../../protocols';
import { getBase64, randomId, dataURLToFile } from '../../../util/utils';

const FormBookSchema = Yup.object().shape({
  title: Yup.string().required('Required field'),
  author: Yup.string().required('Required field'),
  description: Yup.string().required('Required field'),
  category: Yup.mixed()
});

export default function FormBook() {
  const [image, setImage] = useState<File>();
  const [categoriesOptions, setCategoriesOptions] = useState<Option[]>([]);
  const [book, setBook] = useState<Book | null>();

  const { id } = useParams();

  const form = useForm({
    resolver: yupResolver(FormBookSchema),
  });
  const { reset } = form;

  const categoriesToOptions = () => {
    const categories = Api.Category.findAll();
    setCategoriesOptions(categories.map(c => ({
      value: c.id,
      label: c.title
    })))
  }

  useEffect(() => {
    categoriesToOptions()
  }, [])

  const fetchBookAndUpdateFormValues = () => {
    console.log(id);
    if (id) {
      const book = Api.Book.find(id);
      if (book && !book.deleted) {
        setBook(book);
        reset(book);
      }
    } else {
      setBook(null);
      reset({
        title: '',
        author: '',
        description: '',
        category: null
      })
    }
  }

  useEffect(fetchBookAndUpdateFormValues, [id, reset])

  const handleSubmit = async (values: any) => {
    const book: Book = {
      id: id ? id : randomId(),
      author: values.author,
      category: values.category,
      title: values.title,
      description: values.description,
      deleted: false,
      timestamp: Date.now(),
      image: image ? await getBase64(image) : null
    }

    Api.Book.save(book);
  };

  return (
    <Container className={`Form__Container`}
               fixed>
      <Grid item xs>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <Box className="Box">
            <Typography variant="h4" 
                        component="h4">
              Add book
            </Typography>
            <Dropzone onFileUploaded={setImage} 
                      defaultImage={book?.image ? dataURLToFile(book.image) : null} />
            <Input label="Title" 
                   name="title" 
                   form={form} />
            <Input label="Author" 
                   name="author" 
                   fullWidth 
                   form={form} />
            <Select label="Category" 
                    name="category"
                    displayEmpty 
                    defaultValue={null}
                    form={form} 
                    options={categoriesOptions} />
            <Input label="Description" 
                   name="description" 
                   form={form} />
            <Box display="flex" 
                 justifyContent="flex-end"
                 width="100%" >
              <Button className="BtnPrimary" 
                      type="submit">
                Save
              </Button>
            </Box>
          </Box>
        </form>
      </Grid>
    </Container>
  );
}
