import React, { useState } from 'react'
import { Container, Grid, Box, Typography } from '@material-ui/core'

import Dropzone from '../../../components/Dropzone/Dropzone';

export default function FormBook() {
  const [image, setImage] = useState<File>();

  return (
    <Container fixed className={`Form__Container`}>
      <Grid item xs={12}>
        <Box className="Box">
          <Typography variant="h4" component="h4">
            Cadastro de livro
          </Typography>
          <Dropzone onFileUploaded={setImage} />
        </Box>
      </Grid>
    </Container>
  )
}
