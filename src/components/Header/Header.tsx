import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

export default function Header() {
  return (
    <Box className="App__Header" component="header" boxShadow={3}>
      <Button className="BtnPrimary">Adicionar livro</Button>
    </Box>
  );
}
