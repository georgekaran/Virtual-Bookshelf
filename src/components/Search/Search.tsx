import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { Grid, Input, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import searchImage from '../../assets/images/search-image.svg';
import { RootState } from '../../protocols/root-state';
import { setSearch } from '../../actions/searchActions';

interface SearchProps {
  title: string;
}

export default function Search({ title }: SearchProps) {
  const dispatch = useDispatch();
  const search = useSelector((state: RootState) => state.search);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
  }

  return (
    <Grid className="Search__Container" item xs={12}>
      <Grid item xs>
        <h3>{title}</h3>
        <Input
          className="Search__Input"
          placeholder="Search for books"
          disableUnderline
          defaultValue={search}
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
