import React, { ChangeEvent } from 'react';

import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

import searchImage from '../../assets/images/search-image.svg';

export default function Search() {

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    // TODO
  }

  return (
    <Grid className="Search__Container" item xs={12}>
      <Grid item xs>
        <h3>Encontre os melhores livros em cada categoria</h3>
        <Input
          className="Search__Input"
          placeholder="Busque por livros"
          disableUnderline
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          }
          onChange={handleSearch}
        />
      </Grid>
      <Grid className="Image__Wrapper" item xs>
        <img src={searchImage} alt="Search SVG" />      
      </Grid>
    </Grid>
  );
}
