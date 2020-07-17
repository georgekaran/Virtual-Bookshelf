import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Attachment } from '@material-ui/icons';

interface DropzoneProps {
  onFileUploaded: (file: File) => void;
}

const Dropzone: React.FC<DropzoneProps> = ({ onFileUploaded }) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState('');

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const fileUrl = URL.createObjectURL(file);

    setSelectedFileUrl(fileUrl);
    onFileUploaded(file);
  }, [onFileUploaded]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="Dropzone" {...getRootProps()}>
      <input {...getInputProps()} />
      {selectedFileUrl ? (
        <img src={selectedFileUrl} alt="Book Preview" />
      ) : (
        <p>
          <Attachment />
          Imagem do livro
        </p>
      )}
    </div>
  );
};

export default Dropzone;
