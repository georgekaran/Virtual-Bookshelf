import React from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

export default function Search() {
  return (
    <Grid className="Search__Container" item xs={12}>
      <Grid item xs={6}>
        <h3>Encontre os melhores livros em cada categoria</h3>
        <TextField id="standard-basic" variant="outlined" />
      </Grid>
      <Grid item xs={6}></Grid>
    </Grid>
  );
}
