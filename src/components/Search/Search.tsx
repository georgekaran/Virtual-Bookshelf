import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { Grid, Input, InputAdornment, Box, Button, Menu, MenuItem } from '@material-ui/core';
import { Search as SearchIcon, Sort as SortIcon } from '@material-ui/icons';

import searchImage from '../../assets/images/search-image.svg';
import { RootState } from '../../protocols/root-state';
import { setSearch } from '../../actions/searchActions';
import { setSortAlphabetically, setSortDateAsc, setSortDateDesc } from '../../actions/sortActions';

interface SearchProps {
  title: string;
}

export default function Search({ title }: SearchProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const dispatch = useDispatch();
  const search = useSelector((state: RootState) => state.search);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
  }

  const handleSortClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }

  const handleSortClose = () => {
    setAnchorEl(null);
  };

  const dispatchSortAlphabetically = () => {
    dispatch(setSortAlphabetically());
    handleSortClose();
  }

  const dispatchSortDateAsc = () => {
    dispatch(setSortDateAsc());
    handleSortClose();
  }

  const dispatchSortDateDesc = () => {
    dispatch(setSortDateDesc());
    handleSortClose();
  }

  return (
    <Grid className="Search__Container" item xs={12}>
      <Grid item xs>
        <h3>{title}</h3>
        <Box display="flex">
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
          <Button
            variant="contained"
            className="BtnSecondary"
            aria-controls="sort-menu" 
            aria-haspopup="true"
            startIcon={<SortIcon />}
            onClick={handleSortClick}
          >
            Sort
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleSortClose}
          >
            <MenuItem onClick={dispatchSortAlphabetically}>Sort Alphabetically</MenuItem>
            <MenuItem onClick={dispatchSortDateAsc}>Sort creation date (ASC)</MenuItem>
            <MenuItem onClick={dispatchSortDateDesc}>Sort creation date (DESC)</MenuItem>
          </Menu>
        </Box>
      </Grid>
      <Grid className="Image__Wrapper" item xs>
        <img src={searchImage} alt="Search SVG" />      
      </Grid>
    </Grid>
  );
}
