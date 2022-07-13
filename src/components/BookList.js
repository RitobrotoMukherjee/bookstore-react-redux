import React from 'react';
import { useSelector } from 'react-redux';
import RandomId from '../helpers/Random';
import Book from './Book';
import AddBook from './AddBook';

const BookList = () => {
  const books = useSelector((state) => state.books);

  return (
    <div>
      <ul className="BookList">
        {books.map((book) => (
          <Book
            key={RandomId()}
            id={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
            chapter={book.chapter}
          />
        ))}
      </ul>
      <AddBook />
    </div>
  );
};

export default BookList;
