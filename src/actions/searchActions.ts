export const SET_SEARCH = 'SET_SEARCH';
export const RESET_SEARCH = "RESET_SEARCH";

export const setSearch = (search: string) => ({
    type: SET_SEARCH,
    search
});

export const resetSearch = () => ({
  type: RESET_SEARCH,
  search: ""
});