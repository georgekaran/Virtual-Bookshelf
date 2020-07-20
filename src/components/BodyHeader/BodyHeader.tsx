import React from 'react';
import { useHistory } from 'react-router-dom';
import { ArrowBack } from '@material-ui/icons';
import { Box, Typography, IconButton } from '@material-ui/core';

interface BodyHeaderProps {

}

const BodyHeader: React.FC<BodyHeaderProps> = ({ children }) => {
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
      {children}
    </Box>
  )
}

export default BodyHeader;