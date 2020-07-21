function sortAlphabetically<T = any> (field: string, data: T[]): T[] {
  return data.sort((a: any, b: any) => {
    const textA = a[field].toUpperCase();
    const textB = b[field].toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  });
}

export default sortAlphabetically;
