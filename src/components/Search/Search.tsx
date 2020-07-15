import React, { ChangeEvent } from 'react';

import { Grid, Input, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import searchImage from '../../assets/images/search-image.svg';

interface SearchProps {
  title: string;
}

export default function Search({ title }: SearchProps) {

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    // TODO
  }

  return (
    <Grid className="Search__Container" item xs={12}>
      <Grid item xs>
        <h3>{title}</h3>
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
