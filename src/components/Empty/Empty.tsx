import React from 'react';
import { Box, Typography } from '@material-ui/core';

import empty from '../../assets/images/empty.png';

export default function Empty() {
  return (
    <Box className="Empty">
      <img src={empty} alt="Empty" />
      <Typography>It's empty around here</Typography>
    </Box>
  )
}
