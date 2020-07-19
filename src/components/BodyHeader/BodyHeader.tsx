import React from 'react';
import { useHistory } from 'react-router-dom';
import { MoreVert, ArrowBack } from '@material-ui/icons';
import { Box, Typography, IconButton } from '@material-ui/core';

export default function BodyHeader() {
  const history = useHistory()

  const handlePreviousRoute = () => {
    history.goBack()
  }

  return (
    <Box className="BodyHeader">
      <IconButton component="span" onClick={handlePreviousRoute}>
        <ArrowBack />
        <Typography>
          Back
        </Typography>
      </IconButton>
      <IconButton component="span" onClick={handlePreviousRoute}>
        <MoreVert />
      </IconButton>
    </Box>
  )
}
