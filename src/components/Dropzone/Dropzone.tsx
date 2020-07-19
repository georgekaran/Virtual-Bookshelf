import React, { useCallback, useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { Attachment } from '@material-ui/icons';

interface DropzoneProps {
  onFileUploaded: (file: File) => void;
  defaultImage?: File | null
}

const Dropzone: React.FC<DropzoneProps> = ({ onFileUploaded, defaultImage }) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState('');
  const [defaultFileUrl, setDefaultFileUrl] = useState('');

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const fileUrl = URL.createObjectURL(file);

    setSelectedFileUrl(fileUrl);
    onFileUploaded(file);
  }, [onFileUploaded]);

  useEffect(() => {
    if (defaultImage) {
      const fileUrl = URL.createObjectURL(defaultImage);
      setDefaultFileUrl(fileUrl);
    }
  }, [defaultImage])

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/jpeg, image/png' });

  return (
    <div className="Dropzone" {...getRootProps()}>
      <input {...getInputProps()} />
      {selectedFileUrl ? (
        <img src={selectedFileUrl} alt="Book Preview" />
      ) : (defaultFileUrl ? (
        <img src={defaultFileUrl} alt="Book Preview" />
      ) : (
        <p>
          <Attachment />
          Book's image
        </p>
      ))}
    </div>
  );
};

export default Dropzone;
