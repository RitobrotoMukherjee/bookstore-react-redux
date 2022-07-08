import React, { useState, useEffect } from 'react';
import Book from './Book';

const DATA = [
  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    category: 'Action',
    chapter: 'Chapter 17',
  },
  {
    title: 'Dune',
    author: 'Frank Herbert',
    category: 'Science Fiction',
    chapter: 'Chapter 3: "A Lesson Learned"',
  },
  {
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    category: 'Economy',
    chapter: 'Introduction',
  },
];

const BookList = () => {
  const [books, setData] = useState([]);

  useEffect(() => {
    setData(DATA);
  }, [books]);

  return (
    <div>
      <ul className="BookList">
        {books.map((book, i) => (
          <Book
            key={`${book}-${i - 1}`}
            title={book.title}
            author={book.author}
            category={book.category}
            chapter={book.chapter}
          />
        ))}
      </ul>
    </div>
  );
};

export default BookList;
