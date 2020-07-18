import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers';
import { Container, Grid, Box, Typography, Button } from '@material-ui/core';

import Dropzone from '../../../components/Dropzone/Dropzone';
import Input from '../../../components/Form/Input/Input';
import Select from '../../../components/Form/Select/Select';
import { categoriesOptions } from '../../../util/enum/categories';

const FormBookSchema = Yup.object().shape({
  title: Yup.string().required('Required field'),
  author: Yup.string().required('Required field'),
  description: Yup.string().required('Required field'),
  category: Yup.string().required('Required field')
});

export default function FormBook() {
  const [image, setImage] = useState<File>();

  const form = useForm({
    resolver: yupResolver(FormBookSchema),
  });

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Container fixed className={`Form__Container`}>
      <Grid item xs>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <Box className="Box">
            <Typography variant="h4" component="h4">
              Cadastro de livro
            </Typography>
            <Dropzone onFileUploaded={setImage} />
            <Input label="Título" name="title" form={form} />
            <Input label="Autor" name="author" fullWidth form={form} />
            <Select label="Categoria" name="category" form={form} options={categoriesOptions} />
            <Input label="Descrição" name="description" form={form} />
            <Box display="flex" 
                 justifyContent="flex-end"
                 width="100%" >
              <Button className="BtnPrimary" type="submit">
                Salvar
              </Button>
            </Box>
          </Box>
        </form>
      </Grid>
    </Container>
  );
}
