function sortDateDesc<T = any> (field: string, data: T[]): T[] {
  return data.sort((a: any, b: any) => b[field] - a[field]);
}

export default sortDateDesc;
