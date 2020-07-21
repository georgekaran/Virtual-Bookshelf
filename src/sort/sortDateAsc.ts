function sortDateAsc<T = any> (field: string, data: T[]): T[] {
  return data.sort((a: any, b: any) => a[field] - b[field]);
}

export default sortDateAsc;
