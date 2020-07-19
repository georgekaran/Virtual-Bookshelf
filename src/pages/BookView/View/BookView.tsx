import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@material-ui/core';

import BodyHeader from '../../../components/BodyHeader/BodyHeader';
import { Book } from '../../../protocols';
import Api from '../../../util/api/api';

export default function BookView() {
  const [book, setBook] = useState<Book>()
  const { id } = useParams();

  const fetchBook = () => {
    const book = Api.Book.find(id);
    if (book && !book.deleted) {
      setBook(book);
    }
  }

  useEffect(fetchBook, [id])

  return (
    <Container fixed className="Base__Container">
        <BodyHeader />
    </Container>
  )
}
