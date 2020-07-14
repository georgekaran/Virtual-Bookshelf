import React from 'react';
import { Box, Button } from '@material-ui/core';

export default function Header() {
  return (
    <Box className="App__Header" component="header" boxShadow={3}>
      <Button className="BtnPrimary">Adicionar livro</Button>
    </Box>
  );
}
