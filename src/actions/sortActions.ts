export const SORT_ALPHABETICALLY = 'SORT_ALPHABETICALLY';
export const SORT_DATE_ASC = "SORT_DATE_ASC";
export const SORT_DATE_DESC = "SORT_DATE_DESC";

export const setSortAlphabetically = () => ({
  type: SORT_ALPHABETICALLY,
  sort: SORT_ALPHABETICALLY
});

export const setSortDateAsc = () => ({
  type: SORT_DATE_ASC,
  sort: SORT_DATE_ASC,
});

export const setSortDateDesc = () => ({
  type: SORT_DATE_DESC,
  sort: SORT_DATE_DESC,
});