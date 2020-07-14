import React from 'react';
import { Box, Button, Divider, Avatar } from '@material-ui/core';

import userAvatar from '../../assets/images/user-avatar.jpg';

export default function Header() {
  // TODO: Get user info


  return (
    <>
      <Box className="App__Header" 
           component="header">
        <Box className="LogoWrapper">

        </Box>
        <Box className="ActionsWrapper">
        <Button className="BtnPrimary">
          Adicionar livro
        </Button>
        <Avatar className="Avatar"
                alt="Awesome user" 
                src={userAvatar} />
        </Box>
      </Box>
      <Divider />
    </>
  );
}
