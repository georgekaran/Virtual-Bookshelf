import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers';
import { Container, Grid, Box, Typography, Button } from '@material-ui/core';

import Dropzone from '../../../components/Dropzone/Dropzone';
import Input from '../../../components/Form/Input/Input';

const FormBookSchema = Yup.object().shape({
  title: Yup.string().required('Required field'),
  author: Yup.string().required('Required field'),
  description: Yup.string().required('Required field'),
});

export default function FormBook() {
  const form = useForm({
    resolver: yupResolver(FormBookSchema),
  });
  const [image, setImage] = useState<File>();

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
            <Input label="Título" 
                   name="title" 
                   form={form} />
            <Input label="Autor" 
                   name="author"
                   fullWidth 
                   form={form} />
            <Input label="Descrição" 
                   name="description" 
                   form={form} />
            <Button className="BtnPrimary"
                    type="submit">
              Salvar
            </Button>
          </Box>
        </form>
      </Grid>
    </Container>
  );
}
