export function getBase64(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result?.toString());
    reader.onerror = error => reject(error);
  });
}

export function dataURLToFile(dataurl: string): File | null {
  const arr = dataurl.split(',');
  if (arr.length > 0) {
    const mime = arr[0].match(/:(.*?);/)![1];
    const bstr = atob(arr[1]);
    let n = bstr.length
    let u8arr = new Uint8Array(n);
        
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    
    return new File([u8arr], 'file', {type:mime});
  }
  return null
}


export function randomId() {
  return Math.random().toString(36).substr(2, 9);
}